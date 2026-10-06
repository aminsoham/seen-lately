# Seen Lately

A small web app for keeping up with friends and family. Drag a name onto a monthly calendar to log a hangout, note what you did, set a goal for how often you want to see each person, and plan around holidays.

Live at **https://social.thebubble.io**

## How it works

- **People** live in the left column. Each card shows goal progress ("1 of 2 this month"), when you last saw them, and a status: Goal met, N to go, or Overdue.
- **Drag a name onto a day** to log a hangout, then note what you did. Tap any entry to edit the note, move it, or delete it. On phones, tap a name in the rail, then tap a day.
- **Future dates** show as dashed "planned" entries and don't count until the day passes.
- **Holidays** (US federal, observances, and cultural/religious dates) show in the calendar and can be toggled from the Holidays menu.
- **Year at a glance** tallies each person by month against their yearly goal.

## Where the data lives

This is a single static page with no backend. On social.thebubble.io, your people and hangouts are saved in the browser's `localStorage`, so they stay on the device and browser you used. Clearing site data clears them.

The same page also runs as a Claude Artifact, where it uses the artifact's synced database instead, so data follows you across devices.

## Files

- `src/page.html` — the page source (no `<html>`/`<head>` skeleton; that's how Claude Artifacts expect it).
- `build.mjs` — wraps the source into a standalone `index.html`. Run `node build.mjs` after editing the source.
- `index.html` — the generated page that GitHub Pages serves.
- `CNAME` — the custom domain for GitHub Pages.

## Holidays

Fixed and rule-based holidays (Thanksgiving, Memorial Day, Easter, etc.) are computed for any year. Lunar-calendar dates (Lunar New Year, Diwali, Eid, Passover, Rosh Hashanah, Yom Kippur, Hanukkah) come from a table in `src/page.html` covering 2025–2028; extend `CULTURAL` there for later years. Eid dates can shift by a day depending on moon sighting; Jewish holidays are marked on the day they begin at sundown.
