# Baby Shower Invitation – Vite + Netlify Setup

Goal:  
Create a super lightweight **Vite + React** app deployed on **Netlify** that:

- Shows a baby shower invite
- Collects RSVPs (name, email, food requirements) via **Netlify Forms**
- Redirects to a **thank-you page** where guests can **download a calendar invite (.ics)**

Event details (adjust if needed):

- **Date:** Monday 1 December, 11:00am – 2:00pm  
- **Location:** Eddy Gardens, Melbourne  
- **Year used below:** 2025 → update the year if required

---

## 1. Create the Vite app

From the terminal:

```bash
npm create vite@latest baby-shower-invite -- --template react-ts
cd baby-shower-invite
npm install


5. Add thanks.html to public/

Create a public folder in the project root if it doesn’t exist.

Add public/thanks.html:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Thanks for your RSVP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #1f2933;
        background: #f9fafb;
      }

      body {
        margin: 0;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }

      .card {
        background: #ffffff;
        max-width: 480px;
        width: 100%;
        padding: 32px 24px;
        border-radius: 24px;
        box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
        text-align: center;
      }

      h1 {
        font-size: 1.8rem;
        margin: 0 0 10px;
      }

      p {
        margin: 0 0 16px;
        color: #4b5563;
        font-size: 0.95rem;
      }

      .pill {
        display: inline-block;
        margin-top: 10px;
        padding: 10px 18px;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        background: linear-gradient(135deg, #0ea5e9, #6366f1);
        color: white;
      }

      .details {
        margin-top: 18px;
        font-size: 0.9rem;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Thanks for your RSVP 💌</h1>
      <p>We’ve received your details and can’t wait to see you at the baby shower.</p>
      <p>Add it to your calendar so you don’t forget:</p>

      <a href="/baby-shower.ics" class="pill" download>
        Add to calendar
      </a>

      <div class="details">
        <p>Monday 1 December, 11:00am – 2:00pm</p>
        <p>Eddy Gardens, Melbourne</p>
      </div>
    </main>
  </body>
</html>


This is a simple static page that Netlify will serve at /thanks.html.

6. Add calendar invite file baby-shower.ics to public/

Create public/baby-shower.ics with:

BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Baby Shower//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:baby-shower-20251201@example.com
DTSTAMP:20251101T000000Z
SUMMARY:Baby Shower
DESCRIPTION:Join us to celebrate at Eddy Gardens, Melbourne.
LOCATION:Eddy Gardens\, Melbourne
DTSTART:20251201T110000
DTEND:20251201T140000
END:VEVENT
END:VCALENDAR


Notes:

DTSTART:20251201T110000 → 1 December 2025, 11:00

DTEND:20251201T140000 → 1 December 2025, 14:00 (2pm)

Update 2025 to another year if needed.

Because this is in public/, it will be served at /baby-shower.ics.