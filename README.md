Overview

Nico Digitals is a content-driven platform built to help Spanish-speaking creators and freelancers improve their digital skills, discover tools, and access educational resources related to content creation, digital marketing, and online business.

The project combines:

A CMS-powered blog
Interactive resources and calculators
SEO-focused landing pages
Affiliate marketing infrastructure
Newsletter integration
Modular and scalable frontend architecture

This project was designed and developed as a full-stack production-ready application using the modern Next.js App Router ecosystem.

Key Features
Content Platform
Blog powered by Sanity CMS
Dynamic article pages using Portable Text
SEO-friendly routing and metadata management
Real-time content updates
Resource Hub
Filterable resource catalog
Interactive tools and calculators
Reusable content blocks
Marketing Infrastructure
Dedicated affiliate landing pages
Newsletter subscription flow with Mailchimp
Conversion-focused UI patterns
Countdown and social proof components
Developer Experience
Strict TypeScript setup
Modular architecture
Route Groups with isolated layouts
Reusable component system
Clean separation between content and presentation
Tech Stack
Area	Technology
Frontend	Next.js 16, React 19
Language	TypeScript 5
Styling	Tailwind CSS v4
CMS	Sanity CMS
Rich Text	Portable Text
APIs	Next.js Route Handlers
Tooling	ESLint, PostCSS
Architecture Highlights
App Router Structure

The project uses Next.js App Router with Route Groups to separate user experiences:

app/
├── (site)/        # Main website pages
├── (landing)/     # Conversion-focused landing pages
├── api/           # Backend route handlers
└── studio/        # Embedded Sanity Studio

Why this matters

This structure keeps:

marketing pages isolated from the main application layout
layouts reusable and maintainable
routing scalable as the project grows
CMS Integration

The platform uses Sanity CMS as a headless content backend.

Implemented features include:

custom schemas
GROQ queries
live preview support
dynamic blog rendering
reusable resource documents
Content Types
Blog posts
Tags/categories
Digital resources
SEO & Performance

The application was built with discoverability and performance in mind.

Implemented SEO Features
Dynamic metadata generation
Open Graph support
Sitemap generation
Robots configuration
Static generation where applicable
ISR revalidation via webhooks
Performance Considerations
App Router streaming architecture
Optimized image handling
Minimal client-side JavaScript where possible
Component-level separation between server and client rendering
API Endpoints
Endpoint	Purpose
/api/revalidate	ISR revalidation webhook
/api/subscribe	Newsletter subscription handling
Example Components
Component	Description
Navbar	Responsive navigation with mobile support
Footer	Multi-column footer with social links
ResourceGrid	Filterable resources section
PortableTextRenderer	Rich text rendering system
CountdownBar	Session-persistent countdown CTA
SubscribeSection	Newsletter subscription form
Development Setup

Installation:

git clone <repo-url>
cd nico-digitals-website
npm install
Environment Variables
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
Run Locally
npm run dev

What This Project Demonstrates

This project showcases:

Modern React and Next.js architecture
Full-stack JavaScript/TypeScript development
CMS integration
Scalable frontend organization
SEO implementation
Marketing-oriented product thinking
API integration
Conversion-focused UI development
Future Improvements

Potential next steps for the platform:

Authentication system
User dashboards
Analytics integration
A/B testing infrastructure
Automated content pipelines
Internationalization (i18n)
Author

Developed by Nico Digitals.

Focused on building systems around:

content creation
digital marketing
creator tools
scalable online businesses
