// Supabase Edge Function: notify-telegram
// This function sends Telegram notifications when a new form submission is created
// Deployed to Supabase via MCP

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

// Hardcoded credentials (env vars have issues in Supabase)
const TELEGRAM_BOT_TOKEN = '8333552160:AAGWpnUGNc_Jo28cn5gx-xqWLVmIXaTHZHo';
const TELEGRAM_CHAT_ID = '243257249';

serve(async (req) => {
  try {
    const { record } = await req.json();

    // Format the message with only the 6 fields we collect
    const message = `
🎯 New Demo Request!

👤 Name: ${record.name}
📧 Email: ${record.email}
💬 Messenger: ${record.messenger_contact}
👥 Team size: ${record.team_size}
💡 Biggest challenge: ${record.biggest_challenge || 'Not provided'}
📱 Device: ${record.device_type || 'Unknown'}

🕐 Submitted: ${new Date(record.submitted_at).toLocaleString('en-US', {
  timeZone: 'Europe/Paris',
  dateStyle: 'medium',
  timeStyle: 'short'
})} CET
    `.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
