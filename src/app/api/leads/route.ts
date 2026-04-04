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
    
    const intent = interestLabels[interest] || interest || 'Не указан';

    // Telegram Bot Details
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.warn("Telegram Token or Chat ID is missing in environment variables.");
      // Soft fail in dev, return success to frontend to show the tick
      return NextResponse.json({ success: true, warning: 'API keys missing' });
    }

    // Cloudflare AI Enrichment
    let aiTip = '';
    const CF_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
    const CF_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

    if (CF_ACCOUNT_ID && CF_API_TOKEN) {
      try {
        const aiPrompt = `Поступила новая заявка в элитное агентство недвижимости. Имя клиента: ${name}. Цель: ${intent}. Напиши ТОЛЬКО ОДНО короткое предложение СТРОГО НА РУССКОМ ЯЗЫКЕ (совет брокеру) с какой фразы лучше начать звонок этому клиенту, чтобы с первых секунд установить доверие. Без приветствий, без английского текста, без лишней воды, сразу суть на русском.`;
        
        const cfResponse = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${CF_API_TOKEN}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              messages: [
                { role: 'system', content: 'You are a Russian real estate psychology expert. You EXACTLY output strictly in Russian language. Never use English. Твой ответ должен быть ТОЛЬКО на русском языке.' },
                { role: 'user', content: aiPrompt }
              ]
            })
        });

        if (cfResponse.ok) {
           const cfData = await cfResponse.json();
           if (cfData?.result?.response) {
              aiTip = `\n\n🤖 <b>AI Подсказка для брокера:</b>\n<i>${cfData.result.response.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</i>`;
           }
        }
      } catch (e) {
        console.error("AI Enrichment Error:", e);
      }
    }

    const escapeHtml = (text: string) => text ? String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';

    const message = `🔥 <b>НОВАЯ ЗАЯВКА С САЙТА</b> 🔥

👤 <b>Имя:</b> ${escapeHtml(name)}
📞 <b>Телефон:</b> <code>${escapeHtml(phone)}</code>
🎯 <b>Запрос:</b> ${escapeHtml(intent)}

🕒 <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}${aiTip}`;

    // Send to Telegram
    const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
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
