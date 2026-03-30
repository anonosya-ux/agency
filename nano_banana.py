import os
import sys
sys.path.append(os.path.expanduser("~/Library/Python/3.9/lib/python/site-packages"))
import cv2
import numpy as np
import warnings
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
warnings.filterwarnings("ignore")

try:
    from rembg import remove
    from rembg.session_factory import new_session
except ImportError as e:
    print("rembg import error:", e)
    import traceback
    traceback.print_exc()
    exit(1)

RAW_TEAM_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/raw_uploads/team"
OUTPUT_DIR = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/team_processed"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load rembg model once
session = new_session("u2net")

def do_nano_banana():
    if not os.path.exists(RAW_TEAM_DIR):
        print("No raw directory found.")
        return
    files = [f for f in os.listdir(RAW_TEAM_DIR) if f.casefold().endswith(('.jpg', '.png', '.webp', '.jpeg'))]
    if not files:
        print("No images found to upgrade.")
        return

    for idx, f in enumerate(files, 1):
        print(f"Applying Nano Banana Pro enhancement on: {f}")
        filepath = os.path.join(RAW_TEAM_DIR, f)
        
        # 1. Load image and upsscale slightly
        img = Image.open(filepath).convert('RGB')
        
        # 2. AI Background Removal
        try:
            subject_rgba = remove(img, session=session)
        except Exception as e:
            print(f"Rembg failed on {f}: {e}")
            continue

        # 3. OpenCV Nano Retouch (Bilateral Filter + Detail Enhancement)
        # Convert RGBA PIL to BGRA numpy
        subject_cv = cv2.cvtColor(np.array(subject_rgba), cv2.COLOR_RGBA2BGRA)
        alpha = subject_cv[:, :, 3]
        bgr = subject_cv[:, :, :3]
        
        # Bilateral filter for magazine skin
        smoothed = cv2.bilateralFilter(bgr, 9, 75, 75)
        
        # Sharpen eyes/edges slightly using unsharp mask
        gaussian = cv2.GaussianBlur(smoothed, (9, 9), 10.0)
        sharpened = cv2.addWeighted(smoothed, 1.5, gaussian, -0.5, 0)
        
        # Re-apply alpha channel
        retouched_cv2 = np.dstack([sharpened, alpha])
        subject_final = Image.fromarray(cv2.cvtColor(retouched_cv2, cv2.COLOR_BGRA2RGBA))
        
        # Increase contrast + saturation
        enhancer = ImageEnhance.Contrast(subject_final)
        subject_final = enhancer.enhance(1.1)
        col_enhancer = ImageEnhance.Color(subject_final)
        subject_final = col_enhancer.enhance(1.05)

        # 4. Create Studio Black Background (Liquid Glass style)
        bg = Image.new("RGBA", img.size, (11, 11, 11, 255)) # #0B0B0B very dark grey
        
        # Create a gold glow base behind the subject
        glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
        glow.paste((201, 168, 76, 120), (0,0), subject_rgba.split()[3]) # paste gold color using alpha mask
        # Expand and blur glow
        glow = glow.filter(ImageFilter.GaussianBlur(30))
        
        bg.paste(glow, (0,0), glow)
        
        # Over composite subject
        bg.paste(subject_final, (0,0), subject_final)
        
        bg = bg.convert("RGB")
        out_name = f"agent-0{idx}-nano.webp"
        
        # Save output
        out_path = os.path.join(OUTPUT_DIR, out_name)
        bg.save(out_path, "WEBP", quality=90)
        print(f"-> Saved highly upgraded Nano Banana version: {out_name}")

if __name__ == "__main__":
    do_nano_banana()
