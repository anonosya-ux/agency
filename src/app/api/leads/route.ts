import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, interest } = data;

    // Validation
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // Translate interest to beautiful Russian tag
    const interestLabels: Record<string, string> = {
      'buy': '💰 Хочу купить квартиру',
      'sell': '⚡️ Нужно срочно продать',
      'exchange': '🔄 Обмен на большую / меньшую',
      'fast-buy': '⏱ Срочный выкуп за 3 дня',
      'mortgage': '🏦 Помощь с ипотекой',
      'other': '💬 Консультация'
    };
    
    const intent = interest ? (interestLabels[interest] || 'Консультация') : 'Не указан';

    // Telegram Bot Details
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.warn("Telegram Token or Chat ID is missing in environment variables.");
      // Soft fail in dev, return success to frontend to show the tick
      return NextResponse.json({ success: true, warning: 'API keys missing' });
    }

    // Construct Markdown Message
    const message = `
🔥 *НОВАЯ ЗАЯВКА С САЙТА* 🔥

👤 *Имя:* ${name}
📞 *Телефон:* \`${phone}\`
🎯 *Запрос:* ${intent}

🕒 *Время:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
    `;

    // Send to Telegram
    const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!tgResponse.ok) {
      throw new Error(`Telegram API responded with ${tgResponse.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
