# Luma Dental — Frontend Concept

A React-based dental-clinic website concept with responsive sections for services, doctors, FAQs, before/after imagery, testimonials, contact details, and an appointment form.

## Tech stack

- React
- Vite
- CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Run `npm run build` before sharing a release. The repository does not currently include a booking API or backend.

## Important demo limitations

- The appointment form is a frontend interaction only. It validates required fields and explicitly tells the user that no booking is sent. It does not store or transmit patient information.
- Clinic contact details, doctor profiles, testimonials, ratings, and patient imagery are sample/demo content. Replace them with verified, authorized information before presenting the site as a real clinic website.
- Do not collect real patient or health information through this demo. A real booking workflow needs a secure backend, privacy notice, validation, spam protection, access control, and appropriate data retention.
- The project currently has no automated test suite or CI workflow documented.

## Suggested next steps

1. Add component tests and accessibility checks.
2. Connect the appointment form to a secure backend and show a server-confirmed booking status.
3. Replace all sample claims and contact details with verified information or label them clearly as placeholders.
4. Add screenshots, deployment link, and a concise project architecture section.

**Status: frontend portfolio prototype, not a production healthcare system.**
