import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { propertyDetails } = await req.json();

    if (!propertyDetails?.trim()) {
      return NextResponse.json({ error: "Параметры объекта не указаны." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API ключ не настроен." }, { status: 500 });
    }

    const prompt = `Ты — AI-аналитик элитной недвижимости агентства «Фатюхин и Ко» (Москва, Дубай).
Клиент запросил предварительную оценку объекта:

«${propertyDetails}»

Дай краткий, строгий профессиональный ответ в 3 части:
1. Расчётная рыночная стоимость (диапазон, например: от 35 до 42 млн ₽ / $2.1–2.6M)
2. Прогноз доходности / ликвидности (1 предложение)
3. Ключевые факторы, влияющие на цену (маркированный список, 2–3 пункта)

Стиль: Private Banking. Сухо, факты, без лирики. Не более 200 слов.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.15,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI API error:", response.status, errText);
      return NextResponse.json(
        { error: "Сервис временно недоступен. Попробуйте снова." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const report = data.choices?.[0]?.message?.content ?? null;

    if (!report) {
      return NextResponse.json({ error: "Пустой ответ от API." }, { status: 500 });
    }

    return NextResponse.json({ report });
  } catch (error: unknown) {
    console.error("Evaluate route error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
