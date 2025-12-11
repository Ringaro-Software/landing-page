# Contact Form Anti-Spam Setup

The contact form has **2 layers of protection** against spam and abuse:

## 1. 🍯 Honeypot Field
- Hidden field that bots fill but humans don't see
- **No setup required** - works automatically
- If filled, submission is silently rejected
- Effective against simple bots

## 2. ⏱️ Rate Limiting
- Prevents users from submitting more than once every 5 minutes
- **No setup required** - uses browser localStorage
- Shows countdown timer when rate limit is active
- Resets automatically after 5 minutes
- Prevents spam floods and abuse

---

## How It Works

### Honeypot Protection
The form includes a hidden field that:
- Is invisible to real users
- Is positioned off-screen using CSS
- Has no tab index (can't be reached by keyboard)
- Bots often auto-fill all fields, including hidden ones
- If this field has any value, the submission is silently rejected

### Rate Limiting
After a successful submission:
- Timestamp is saved in browser's localStorage
- Form button becomes disabled and grayed out
- User sees countdown timer: "Please wait 4:32 before submitting again"
- After 5 minutes, the form becomes available again
- Prevents the same user from flooding your inbox

---

## Testing

### Test Honeypot:
1. Open browser DevTools → Console
2. Type: `document.querySelector('input[name="honeypot"]').value = "bot"`
3. Try to submit the form
4. Form should be silently rejected (no error message)

### Test Rate Limiting:
1. Submit the form successfully
2. Try submitting again immediately
3. You should see: "Please wait X:XX before submitting again"
4. Button will be disabled and grayed out
5. Wait 5 minutes or clear localStorage to reset

---

## EmailJS Setup

To receive form submissions via email:

1. Go to https://dashboard.emailjs.com/ and create an account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - User's full name
   - `{{from_email}}` - User's email
   - `{{company}}` - Company name (optional)
   - `{{project_type}}` - Selected project type
   - `{{message}}` - User's message
4. Copy your credentials to `.env`:

```bash
cp .env.sample .env
```

Then edit `.env`:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

5. Restart your dev server:
```bash
npm run dev
```

---

## Security Features

✅ **Honeypot**: Catches simple bots
✅ **Rate Limiting**: Prevents spam floods (1 submission per 5 min)
✅ **Client-side validation**: Required fields enforced
✅ **Zero user friction**: No CAPTCHAs or extra steps
✅ **localStorage tracking**: Per-device rate limiting

---

## Troubleshooting

### Rate limit not working
- Check if localStorage is enabled in your browser
- Try in incognito mode to test fresh state
- Clear localStorage: `localStorage.removeItem('contact_form_last_submit')`

### Form not sending emails
- Check browser console for errors
- Verify EmailJS credentials in `.env` are correct
- Make sure all required fields are filled
- Check EmailJS dashboard for failed emails

### Testing in development
- You can test the form without EmailJS configured
- Errors will show in console but won't break the page
- Set up EmailJS to actually receive test emails
