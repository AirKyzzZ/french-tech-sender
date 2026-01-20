<div align="center">

# French Tech Sender

**Outreach automation tool for the French Tech Bordeaux ecosystem**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://french-tech-sender.vercel.app) · [Report Bug](https://github.com/AirKyzzZ/french-tech-sender/issues) · [Request Feature](https://github.com/AirKyzzZ/french-tech-sender/issues)

---

</div>

## Overview

French Tech Sender is a powerful outreach tool designed specifically for connecting with the **French Tech Bordeaux** ecosystem. Target startups, investors, incubators, and key players with personalized automated emails.

<details>
<summary><strong>Screenshot</strong></summary>
<br>

<!-- Add your screenshot here -->
![French Tech Sender Screenshot](https://via.placeholder.com/1280x720/1a1a2e/ffffff?text=French+Tech+Sender)

</details>

## Features

<table>
<tr>
<td width="50%">

### Target Selection
- Filter by category (startups, investors, incubators...)
- Access the complete French Tech Bordeaux database
- Smart filtering and search

</td>
<td width="50%">

### Email Automation
- Personalized message templates
- Dynamic variables (name, company...)
- Scheduled sending

</td>
</tr>
<tr>
<td width="50%">

### Multi-Platform
- Windows, macOS, Linux support
- Desktop application
- Intuitive interface

</td>
<td width="50%">

### Secure Payments
- One-time purchase (179€)
- Stripe checkout integration
- Instant download access

</td>
</tr>
</table>

## Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white) |
| **Database** | ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) |
| **Payments** | ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white) |
| **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Supabase account
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/AirKyzzZ/french-tech-sender.git

# Navigate to the project
cd french-tech-sender

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Generate Prisma client
npx prisma generate

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description | Required |
|----------|-------------|:--------:|
| `NEXT_PUBLIC_APP_NAME` | Application name | ✅ |
| `NEXT_PUBLIC_APP_URL` | Production URL | ✅ |
| `DATABASE_URL` | Supabase connection string (pooled) | ✅ |
| `DIRECT_URL` | Supabase direct connection | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key | ✅ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | ✅ |
| `STRIPE_PRICE_ID` | Stripe price ID for the product | ✅ |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | ✅ |

<details>
<summary><strong>Example configuration</strong></summary>

```env
# App
NEXT_PUBLIC_APP_NAME=French Tech Sender
NEXT_PUBLIC_APP_URL=https://french-tech-sender.vercel.app

# Database (Supabase)
DATABASE_URL=postgresql://postgres.[ref]:[password]@aws-0-eu-west-3.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.[ref]:[password]@aws-0-eu-west-3.pooler.supabase.com:5432/postgres

# Stripe
STRIPE_SECRET_KEY=sk_live_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_PRICE_ID=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

</details>

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Landing page
│   ├── api/             # API routes (checkout, webhooks)
│   ├── download/        # Post-purchase download page
│   ├── privacy/         # Privacy policy
│   └── terms/           # Terms of service
├── components/
│   ├── marketing/       # Landing page components
│   ├── ui/              # shadcn/ui components
│   └── global/          # Shared components
├── lib/                 # Utilities (Stripe, Prisma)
├── constants/           # App constants
└── styles/              # Global styles
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AirKyzzZ/french-tech-sender)

1. Click the button above or import the repo on [Vercel](https://vercel.com/new)
2. Add environment variables in the Vercel dashboard
3. Deploy

### Stripe Webhook Setup

After deployment, create a webhook endpoint in [Stripe Dashboard](https://dashboard.stripe.com/webhooks):

| Setting | Value |
|---------|-------|
| **Endpoint URL** | `https://your-domain.com/api/webhooks/stripe` |
| **Events** | `checkout.session.completed` |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with care by [Klyx](https://klyx.fr)**

[![Portfolio](https://img.shields.io/badge/Portfolio-klyx.fr-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://klyx.fr)
[![GitHub](https://img.shields.io/badge/GitHub-AirKyzzZ-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AirKyzzZ)

</div>
