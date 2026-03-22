import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { propertyDetails } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key not configured." }, { status: 500 });
    }

    const prompt = `
    Действуй как инвестиционный ИИ-аналитик элитной недвижимости в Дубае и Москве (Фатюхин и Ко).
    Пользователь прислал следующие параметры объекта для оценки:
    ${propertyDetails}
    
    Сформируй короткий, строгий и очень профессиональный расчет (до 400 символов). 
    Оцени примерную рыночную стоимость в долларах (например от $2M до $2.4M) и напиши 1-2 предложения прогноза рентабельности.
    Стиль: Private Banking, сухо, факты, без эмоций, строгий тон.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // fast and reliable for simple calculations
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_tokens: 150,
    });

    const report = completion.choices[0].message.content;

    return NextResponse.json({ report });
  } catch (error: any) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: "Failed to process evaluation" }, { status: 500 });
  }
}
