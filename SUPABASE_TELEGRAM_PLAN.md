# Supabase + Vercel + Telegram Integration Plan

## Overview
Deploy Human Vector Landing to Vercel, integrate Supabase for form submissions with comprehensive tracking, and send Telegram notifications for each submission.

---

## Data Tracking Schema (17 Fields)

### **1. Form Data** (5 fields)
- `name` - User's name
- `email` - User's email
- `team_size` - Selected team size (20-40, 40-60, 60-100, 100+)
- `biggest_challenge` - Optional challenge description
- `messenger_contact` - Optional messenger contact (Telegram, WhatsApp, etc.)

### **2. Device & Browser** (3 fields)
- `device_type` - Desktop, Mobile, or Tablet
- `browser` - Chrome, Safari, Firefox, Edge, etc.
- `os` - Windows, macOS, iOS, Android, Linux

### **3. Location & Language** (4 fields)
- `country` - e.g., "United States", "Canada"
- `city` - e.g., "New York", "Toronto"
- `language` - e.g., "en-US", "fr-FR"
- `timezone` - e.g., "America/New_York"

### **4. Traffic Source** (1 field)
- `referrer` - Full URL of referring page (or "direct")

### **5. Screen** (1 field)
- `screen_resolution` - e.g., "1920x1080"

### **6. System Data** (3 fields)
- `id` - Unique UUID for this submission
- `submitted_at` - Timestamp of submission
- `ip_address` - User's IP address

---

## Supabase Table Structure

```sql
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Form data
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  team_size TEXT NOT NULL,
  biggest_challenge TEXT,
  messenger_contact TEXT,

  -- Device & Browser
  device_type TEXT,
  browser TEXT,
  os TEXT,

  -- Location & Language
  country TEXT,
  city TEXT,
  language TEXT,
  timezone TEXT,

  -- Traffic Source
  referrer TEXT,

  -- Screen
  screen_resolution TEXT,

  -- System
  ip_address TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Implementation Plan

### **Phase 1: Supabase Database Setup** ✅ Claude does this

**Step 1.1:** Create form_submissions table in Supabase
- Use the SQL schema above
- Create table via Supabase MCP tools

**Step 1.2:** Set up Row Level Security (RLS) policies
- Allow anonymous inserts (for form submissions)
- Restrict reads to authenticated users only

---

### **Phase 2: Supabase Edge Function** ✅ Claude does this

**Step 2.1:** Create Supabase Edge Function for Telegram notifications
- Function name: `notify-telegram`
- Triggered by database insert on `form_submissions` table
- Sends formatted message to Telegram bot with all submission details

**Step 2.2:** Deploy Edge Function to Supabase

---

### **Phase 3: Frontend Integration** ✅ Claude does this

**Step 3.1:** Install Supabase client library
```bash
npm install @supabase/supabase-js
```

**Step 3.2:** Create Supabase client configuration
- File: `src/lib/supabaseClient.js`
- Configure with environment variables

**Step 3.3:** Update ContactForm component
- Add "Messenger contact" text field to form
- Collect all metadata (language, country, device, browser, etc.)
- Use geolocation API for country/city detection
- Parse user agent for device/browser/OS info
- Submit to Supabase with all 17 fields

**Step 3.4:** Add error handling and retry logic

---

### **Phase 4: Environment Variables** ✅ Claude does this

**Step 4.1:** Create `.env` file locally
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Step 4.2:** Verify `.env` is in `.gitignore`

---

### **Phase 5: Telegram Bot Setup** 👤 You do this with Claude's guidance

**Step 5.1:** Create Telegram bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow prompts to name your bot (e.g., "Human Vector Leads Bot")
4. Save the **Bot Token** that BotFather provides
   - Format: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

**Step 5.2:** Get your Chat ID
1. Send any message to your new bot (e.g., "Hello")
2. Open this URL in browser (replace `<YOUR_BOT_TOKEN>` with actual token):
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. Look for `"chat":{"id":123456789}` in the JSON response
4. Save this **Chat ID** (it's a number, can be negative)

**Step 5.3:** Provide credentials to Claude
- Share Bot Token and Chat ID
- Claude will configure the Edge Function with these credentials

---

### **Phase 6: Vercel Deployment** 👤 You do this

**Step 6.1:** Push code to GitHub
```bash
git add .
git commit -m "Add Supabase integration and Telegram notifications"
git push origin main
```

**Step 6.2:** Connect GitHub repository to Vercel
1. Go to https://vercel.com
2. Click "Import Project" or "Add New Project"
3. Select your GitHub repo: `Human-Vector/HumanVector-Landing`
4. Vercel auto-detects Vite settings

**Step 6.3:** Add environment variables in Vercel
- Go to Project Settings → Environment Variables
- Add `VITE_SUPABASE_URL` (from Supabase dashboard)
- Add `VITE_SUPABASE_ANON_KEY` (from Supabase dashboard)
- Apply to: Production, Preview, and Development

**Step 6.4:** Deploy
- Click "Deploy"
- Vercel will build and deploy automatically
- Get production URL (e.g., `https://human-vector.vercel.app`)

---

### **Phase 7: Testing** ✅ We do together

**Step 7.1:** Test form submission on local dev
- Run `npm run dev`
- Fill out form with test data
- Check browser console for any errors

**Step 7.2:** Verify data in Supabase dashboard
- Go to Supabase → Table Editor → form_submissions
- Confirm all 17 fields are populated correctly
- Check IP address, country, device info

**Step 7.3:** Check Telegram notification received
- Verify message appears in your Telegram bot chat
- Check formatting and all data fields

**Step 7.4:** Test on deployed Vercel site
- Submit form from production URL
- Verify Supabase insert and Telegram notification

**Step 7.5:** Test from different devices/browsers
- Mobile (iOS/Android)
- Desktop (Chrome/Safari/Firefox)
- Different countries (optional: use VPN)

---

## Execution Order

1. ✅ **Claude:** Set up Supabase table and RLS policies
2. 👤 **You:** Create Telegram bot and share credentials (Bot Token + Chat ID)
3. ✅ **Claude:** Create Edge Function with Telegram integration
4. ✅ **Claude:** Update frontend code (add messenger_contact field, Supabase integration, metadata collection)
5. ✅ **Claude:** Configure environment variables locally
6. 👤 **You:** Push to GitHub and deploy via Vercel
7. 👤 **You:** Add environment variables in Vercel dashboard
8. ✅ **We:** Test end-to-end together

---

## What Each Tracking Field Tells You

### **Why Track Device & Browser?**
- **Marketing:** Optimize ad creatives for most-used devices
- **Product:** Prioritize mobile/desktop development
- **UX:** Fix browser-specific issues

### **Why Track Location?**
- **Sales:** Schedule calls in their timezone
- **Marketing:** Target specific regions with localized campaigns
- **Expansion:** Identify high-potential markets

### **Why Track Referrer?**
- **Marketing ROI:** Which channels drive qualified leads
- **Content:** Which blog posts/pages convert best
- **Partnerships:** Track referrals from partners

### **Why Track Screen Resolution?**
- **Design:** Ensure site works on popular screen sizes
- **Analytics:** Understand device quality (high-res = premium users)

---

## Privacy & Legal Notes

✅ **Legal to track without consent:**
- All technical metadata (browser, device, IP, etc.)
- Referrer and traffic source
- Form data user explicitly submits

✅ **Your Privacy Policy already covers this**
- Mentions collecting device info and analytics
- Standard for B2B SaaS companies

⚠️ **Best practices:**
- Don't share data with third parties (except Telegram for internal notifications)
- Allow users to request data deletion (GDPR/CCPA)
- Use HTTPS (Vercel provides this automatically)

---

## Environment Variables Reference

### **Local Development** (`.env` file)
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### **Vercel Production** (Dashboard → Settings → Environment Variables)
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### **Supabase Edge Function Secrets** (Set via Supabase CLI or Dashboard)
```
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

---

## Telegram Message Format

When a form is submitted, you'll receive a Telegram message like this:

```
🎯 NEW DEMO REQUEST

👤 Name: John Smith
📧 Email: john@example.com
👥 Team Size: 60-100
💬 Challenge: Struggling with remote team accountability
📱 Messenger: @johnsmith

🌍 Location: New York, United States
🕐 Timezone: America/New_York
🌐 Language: en-US

💻 Device: Desktop
🌐 Browser: Chrome
🖥️ OS: macOS
📐 Screen: 1920x1080

🔗 Referrer: https://linkedin.com/company/humanvector

⏰ Submitted: 2025-11-29 14:32:15 UTC
🆔 ID: 550e8400-e29b-41d4-a716-446655440000
```

---

## File Changes Summary

### **New Files:**
- `src/lib/supabaseClient.js` - Supabase client configuration
- `supabase/functions/notify-telegram/index.ts` - Edge Function for Telegram
- `.env` - Local environment variables (git-ignored)

### **Modified Files:**
- `src/components/ContactForm/ContactForm.jsx` - Add messenger_contact field + Supabase integration
- `src/components/ContactForm/ContactForm.module.css` - Style messenger_contact field
- `package.json` - Add @supabase/supabase-js dependency

### **Vercel Configuration:**
- Environment variables set in dashboard

---

## Ready to Start!

Status: ✅ **Plan Complete**

Next step: Claude creates Supabase table → You create Telegram bot → We finish together!
