import os
import io
try:
    from PIL import Image, ImageEnhance, ImageFilter, ImageOps
except ImportError:
    print("Please install Pillow: pip install Pillow")
    exit(1)

RAW_TEAM_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/raw_uploads/team"
RAW_AWARDS_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/raw_uploads/awards"
PROCESSED_TEAM_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/team_processed"
PROCESSED_AWARDS_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/awards_processed"

def process_team_photo(filename, filepath):
    try:
        img = Image.open(filepath).convert("RGBA")
        
        # 1. Upscale (mock 4K if small, else just improve)
        target_height = 2160
        ratio = target_height / float(img.size[1])
        target_width = int((float(img.size[0]) * float(ratio)))
        img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # 2. Studio Black filter
        # Retouch simulation: slight blur
        img_retouch = img.filter(ImageFilter.BoxBlur(1))
        img = Image.blend(img, img_retouch, 0.3)
        
        # Contrast & Saturation
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.15)
        color_enhancer = ImageEnhance.Color(img)
        img = color_enhancer.enhance(1.05)
        
        # Gold backlight simulation overlay
        overlay = Image.new("RGBA", img.size, (201, 168, 76, 20)) # Gold tint #C9A84C
        img = Image.alpha_composite(img, overlay)
        
        # Convert to RGB to save as WebP
        img = img.convert("RGB")
        out_name = os.path.splitext(filename)[0].lower() + ".webp"
        
        if not 'agent' in out_name and not 'team' in out_name:
             out_name = f"agent-{out_name}"
             
        out_path = os.path.join(PROCESSED_TEAM_DIR, out_name)
        img.save(out_path, "WEBP", quality=85)
        print(f"Processed team: {out_name}")
    except Exception as e:
        print(f"Failed processing {filename}: {e}")

def process_award(filename, filepath):
    try:
        img = Image.open(filepath).convert("RGB")
        
        # Resize
        img.thumbnail((2000, 2000), Image.Resampling.LANCZOS)
        
        # Clean background / Increase white
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(1.1)
        contrast = ImageEnhance.Contrast(img)
        img = contrast.enhance(1.2)
        
        # Apply Glossy/Gold Glow
        overlay = Image.new("RGB", img.size, (201, 168, 76))
        img = Image.blend(img, overlay, 0.05)
        
        # slightly blur to act as "glow" base
        glow = img.filter(ImageFilter.GaussianBlur(10))
        img = Image.blend(img, glow, 0.1) # soft glossy glow
        
        out_name = os.path.splitext(filename)[0].lower() + ".webp"
        
        if not 'award' in out_name and not 'cert' in out_name:
             out_name = f"award-{out_name}"
             
        out_path = os.path.join(PROCESSED_AWARDS_DIR, out_name)
        img.save(out_path, "WEBP", quality=85)
        print(f"Processed award: {out_name}")
    except Exception as e:
        print(f"Failed processing {filename}: {e}")

if not os.path.exists(RAW_TEAM_DIR) or not os.path.exists(RAW_AWARDS_DIR):
    print("Raw directories not found. Creating them.")
    os.makedirs(RAW_TEAM_DIR, exist_ok=True)
    os.makedirs(RAW_AWARDS_DIR, exist_ok=True)
    os.makedirs(PROCESSED_TEAM_DIR, exist_ok=True)
    os.makedirs(PROCESSED_AWARDS_DIR, exist_ok=True)

# Process existing images
for folder, process_func in [(RAW_TEAM_DIR, process_team_photo), (RAW_AWARDS_DIR, process_award)]:
    if os.path.exists(folder):
        for f in os.listdir(folder):
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                process_func(f, os.path.join(folder, f))
print("Done processing.")
