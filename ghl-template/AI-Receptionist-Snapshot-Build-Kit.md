# AI Receptionist Snapshot: GHL Build Kit

Build this once in a **demo sub-account**, test it, then export it as a Snapshot. That snapshot is both your video demo and the GrowthHub365 "AI Receptionist Snapshot" product.

> GHL renames menus often. Match the names below to what you see. Merge-field syntax (`{{contact.first_name}}`) is standard but verify in the editor's variable picker.
> Replace everything in `[BRACKETS]` per client. Fictional demo business: **Summit Plumbing Demo**.

Estimated build time: 2 to 3 hours (plus A2P approval wait, which can take days, so start it first).

---

## 0. Start now: phone and compliance
1. Settings → Phone Numbers → add a number for the demo account.
2. Settings → Trust Center / Compliance → register the brand and campaign for **A2P 10DLC**. SMS will be filtered without it.
3. Make sure STOP/opt-out handling is on (default). Never message after STOP.

## 1. Custom Values (so the snapshot is reusable)
Settings → Custom Values. Create these; every message and the bot prompt reference them.

| Name | Demo value |
|---|---|
| business_name | Summit Plumbing Demo |
| business_phone | [your number] |
| owner_name | [first name] |
| service_area | [cities / zip codes] |
| business_hours | Mon-Fri 8am-6pm, Sat 9am-1pm |
| services_list | Leak repair, water heaters, drain cleaning, repiping |
| booking_link | [calendar link] |
| review_link | [Google review link] |

## 2. Pipeline: "AI Leads"
Opportunities → Pipelines → create **AI Leads** with stages:
1. New Lead
2. AI Engaged
3. Qualified
4. Booked
5. Showed / Completed
6. Won
7. Lost / No Response

## 3. Tags (create these)
`ai-lead`, `ai-qualified`, `ai-booked`, `needs-human`, `missed-call`, `no-response`, `dnd-requested`

## 4. Contact custom fields
Settings → Custom Fields: `service_needed` (text), `service_address` (text), `urgency` (dropdown: Emergency / This week / Flexible), `lead_source_detail` (text).

## 5. Calendar: "Free Estimate"
Calendars → create a Round Robin or Simple calendar.
- Duration 60 min, buffer 15 min, minimum notice 2 hours, slots every 30 min.
- Availability: match `business_hours`.
- Form: name, phone, address (map to `service_address`).
- Confirmation + reminders handled by Workflow 4 (below), not the calendar default, so you control wording.

## 6. Conversation AI bot

Settings → Conversation AI (or AI Agents) → create bot **"Receptionist"**. Channels: SMS, Web Chat (add Facebook/Instagram if used). Mode: **Auto-pilot** with human handoff.

### Bot prompt (paste)
```
You are the virtual receptionist for {{custom_values.business_name}}, a local service business serving {{custom_values.service_area}}.

GOAL: Turn every inquiry into a booked estimate. Be fast, warm, and brief.

STYLE
- Text like a friendly front-desk person: short messages (1-3 sentences), plain words, no jargon.
- Ask ONE question at a time.
- Never invent prices, availability, or promises. If unsure, say you will have the team confirm and flag for a human.
- You may say you are the business's virtual assistant if asked. Never claim to be human.

FLOW
1. Greet by first name if known. Acknowledge their issue.
2. Collect, one at a time: what they need (service_needed), the service address, how urgent (urgency), best phone number if missing.
3. Offer to book a free estimate. Offer two specific time options from the calendar.
4. Confirm the booking back to them in one message (day, time, address).
5. If emergency (active leak, no heat, flooding, gas smell): say you are alerting the team now, collect address and phone, tag needs-human immediately.

SERVICES WE OFFER: {{custom_values.services_list}}
HOURS: {{custom_values.business_hours}}
If asked about something not in the knowledge base, do not guess. Say: "Great question, let me have {{custom_values.owner_name}} get you the exact answer," then flag needs-human.

HANDOFF TO HUMAN when: caller is angry, asks for a person, asks about pricing beyond the knowledge base, mentions legal/insurance claims, or asks something you cannot answer.

NEVER: discuss competitors, give medical/legal/financial advice, ask for payment details, or continue after the contact says STOP.
```

### Bot actions / goals
- **Book appointment** → "Free Estimate" calendar.
- **Update contact fields** → `service_needed`, `service_address`, `urgency`.
- **Add tag** → `ai-qualified` when name + address + service collected; `needs-human` on handoff rules.
- **Trigger workflow** → Workflow 6 (staff alert) on `needs-human`.

### Knowledge base (create a doc, paste, edit per client)
```
BUSINESS: {{business_name}}, serving {{service_area}}.
HOURS: {{business_hours}}. After hours the assistant still books appointments.
SERVICES: [list each service with 1-2 sentence description]
ESTIMATES: Free estimates, about 60 minutes, on site.
PRICING: We do not quote exact prices by text. Typical ranges: [only add if the owner approves]. Final price given at estimate.
PAYMENT: [Cards, check, financing options]
LICENSED & INSURED: [yes/no + license #]
GUARANTEE: [warranty / satisfaction policy]
FAQ
Q: Do you offer emergency service? A: [answer]
Q: How soon can someone come? A: [typical lead time]
Q: Do you serve [city]? A: [answer]
Q: What do I need to prepare? A: [answer]
```

## 7. Workflows (Automation → Workflows)

**Quiet hours:** on every SMS action use "Time window" / "Wait until" so texts send only 8am-9pm contact local time (emergency AI replies to inbound messages are fine).

### W1: New lead intake
- Trigger: Contact Created OR Customer Replied (first inbound) OR Form Submitted OR Chat Widget message.
- Actions: Add tag `ai-lead` → Create Opportunity (AI Leads / New Lead) → Enable Conversation AI bot → If no reply in 2 hours → go to W3.
- Move opportunity to **AI Engaged** when bot replies.

### W2: Missed-call text-back
- Trigger: Call Status = Missed / No Answer (inbound).
- Actions: Add tag `missed-call` → wait 10 seconds → send SMS:
```
Hi{{contact.first_name | default: ""}}, this is {{custom_values.business_name}}. Sorry we missed your call! What can we help you with? We can get you booked for a free estimate right here.
```
→ Create/move opportunity → enable bot.

### W3: Follow-up (no response)
Trigger: tag `ai-lead` AND no inbound reply. Stop on any reply or booking.
- +2 hours SMS: `Hi {{contact.first_name}}, just checking in. Still need help with {{contact.service_needed}}? Reply here and I'll get you scheduled.`
- +1 day SMS: `Hi {{contact.first_name}}, we have openings this week for a free estimate. Want me to hold a time for you?`
- +3 days SMS: `Last check-in from {{custom_values.business_name}}. If you still need help just reply and we'll take care of it. If not, no worries!`
- +7 days: move to **Lost / No Response**, add tag `no-response`.

### W4: Booking confirmation + reminders
- Trigger: Appointment Status = Booked.
- Actions: tag `ai-booked`, move opportunity → **Booked**.
- Immediately SMS: `You're booked, {{contact.first_name}}! {{appointment.day_of_week}} {{appointment.start_time}} at {{contact.service_address}}. Reply here if anything changes. - {{custom_values.business_name}}`
- 24 hours before SMS: `Reminder: your estimate with {{custom_values.business_name}} is tomorrow at {{appointment.start_time}}. Reply C to confirm or R to reschedule.`
- 2 hours before SMS: `We're on the way soon! See you at {{appointment.start_time}}.`
- No-show → SMS + task for owner.

### W5: Review request (optional)
- Trigger: Opportunity moved to **Won** / Appointment status Showed.
- Wait 1 day → SMS: `Thanks for choosing {{custom_values.business_name}}, {{contact.first_name}}! If we did a good job, a quick review helps a lot: {{custom_values.review_link}}`
- Wait 3 days, no click → one reminder. Never send twice after that.

### W6: Staff alert (human handoff)
- Trigger: tag added `needs-human`.
- Actions: internal SMS + email to owner: `NEEDS YOU: {{contact.name}} {{contact.phone}}. Issue: {{contact.service_needed}}. Open conversation: {{contact.conversation_link}}` → create task (due now) → pause bot for this contact.

## 8. Web chat widget
Sites → Chat Widget → style with your brand colors and greeting:
`Hi! 👋 Need a quote or have a question? I can help and get you booked.`
Copy the embed code. Send it to Claude Code to add to the site so visitors can try the AI live.

## 9. Test checklist
- [ ] Text the number as a customer: bot replies within seconds.
- [ ] Full flow: describe problem → address → urgency → pick time → confirmation received.
- [ ] Opportunity appears in correct stage; tags and custom fields filled.
- [ ] Call the number and let it ring out: missed-call text arrives.
- [ ] Say "I need a human": needs-human tag, owner alert fires, bot stops.
- [ ] Reply STOP: no further messages.
- [ ] Ignore a lead: W3 sequence fires on schedule (set waits to 1 minute for testing, then restore).
- [ ] Reminders arrive in the right order and correct timezone.

## 10. Turn it into the GrowthHub365 product
1. Replace demo values with neutral placeholders (`[YOUR BUSINESS]`).
2. Agency view → Settings → **Snapshots → Create Snapshot** from the demo sub-account; include workflows, pipelines, calendars, custom values/fields, tags, forms, chat widget.
3. Check what snapshots do NOT carry (phone numbers, A2P registration, calendar connections, AI bot settings may need manual re-setup). Write these into a short "After import" checklist for buyers.
4. Create the **Snapshot share link**.
5. Put the share link behind checkout (Stripe payment link or a GHL funnel with order form that emails the link).
6. Add the checkout URL and price to `AI Receptionist Snapshot` in `packages/web/src/web/lib/site.ts`.
7. Record a 2 to 3 minute walkthrough video and include it on the thank-you page.

### "After import" checklist for buyers (include with product)
1. Add/buy a phone number and finish A2P registration.
2. Fill in all Custom Values.
3. Connect your calendar and set availability.
4. Edit the bot prompt and knowledge base with your real business details.
5. Test with your own phone before going live.
