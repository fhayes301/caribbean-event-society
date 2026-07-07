# Caribbean Event Society — Project Context

A curated platform for event and creative professionals in Trinidad & Tobago. Phase 1 delivers a public-facing website, a member directory with an application-to-approval flow, and an admin curation layer.

Built by YoucoLabs (Faye Hayes) for client JaaEL Shebioba.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Vercel Postgres (Neon) |
| ORM | Prisma |
| Auth | Custom JWT — own DB, no third-party auth provider |
| Image storage | Vercel Blob |
| Email | SendGrid |
| HTTP client | Axios + interceptor |
| Hosting | Vercel |

---

## Folder Structure

```
src/
├── app/                        # Next.js App Router — pages and API routes
│   ├── (public)/               # Marketing pages (no auth required)
│   │   ├── about/
│   │   ├── events/
│   │   ├── directory/
│   │   └── contact/
│   ├── (auth)/                 # Auth pages
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   ├── (member)/               # Authenticated member pages
│   │   └── profile/
│   ├── (admin)/                # Admin-only pages
│   │   └── dashboard/
│   └── api/                    # API route handlers — thin, delegate to controllers
│       ├── auth/
│       ├── members/
│       ├── profiles/
│       ├── events/
│       └── admin/
│
├── server/                     # Backend logic — MVC pattern
│   ├── controllers/            # Parse request → call service → return response
│   ├── services/               # Business logic
│   ├── models/                 # Prisma queries — data access only
│   ├── middleware/             # JWT verification, error handling
│   ├── types/                  # All TypeScript types, divided by resource
│   │   # auth.types.ts | member.types.ts | profile.types.ts | event.types.ts | admin.types.ts
│   └── lib/
│       # prisma.ts — Prisma client singleton
│       # jwt.ts — sign/verify helpers
│       # sendgrid.ts — email client
│       # blob.ts — Vercel Blob upload helpers
│
└── client/                     # Frontend-specific code
    ├── api/
    │   └── axios.ts            # Axios instance + interceptor
    ├── components/
    │   ├── ui/                 # Base/shadcn components
    │   ├── layout/             # Navbar, footer, shell
    │   ├── directory/
    │   ├── events/
    │   └── auth/
    ├── hooks/                  # Custom React hooks
    └── store/                  # Auth state (Zustand)

prisma/
├── schema.prisma
└── migrations/
```

---

## Key Architectural Patterns

### Auth — Custom JWT
- No Clerk, no NextAuth. Tokens issued from our own DB.
- **Access token**: short-lived (15 min), stored in memory (Zustand store). Never in localStorage.
- **Refresh token**: stored in an httpOnly cookie.
- `server/middleware/auth.middleware.ts` verifies JWT on protected routes.
- `client/api/axios.ts` attaches the bearer token on every request and silently refreshes on 401 before retrying.

### MVC on the Backend
- `app/api/**/route.ts` files are thin — they call a controller and return the response.
- Controllers parse the request and delegate to a service.
- Services contain business logic and call models.
- Models contain Prisma queries only — no business logic.

### Types
- All types live in `src/server/types/`, one file per resource.
- Imported by both server and client code via the `@/server/types/*` alias.

### Member Application Flow
- Registration creates a `User` + `Profile` with `status: 'pending'`.
- Admin reviews pending profiles and sets `status: 'approved' | 'rejected'`.
- Directory only shows `status: 'approved'` profiles. Admins can also toggle `status: 'hidden'`.
- No separate applications table — `profile.status` is the source of truth.

### Directory Search (Phase 1)
- Postgres `ilike` + GIN index on `name` and `bio`.
- Filter by `category` and `location` via query params on `GET /api/profiles`.

---

## Phase 1 Milestones

1. **Project Kickoff & Technical Setup** ← current
2. **Public-Facing Website** — home, about, events, event detail, contact
3. **Directory & Member Application Flow** — auth, profiles, search/filter
4. **Admin Curation Layer** — review queue, approve/reject, visibility toggle
5. **QA, Testing & Launch**
6. **Final Acceptance**

### Out of Scope (Phase 1)
- Payment processing / Stripe
- Membership tiers or gated content
- Member dashboards
- Visual design (provided by client — JaaEL Shebioba)
- Copywriting (provided by client)

---

## Environment Variables

```
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
SENDGRID_API_KEY=
BLOB_READ_WRITE_TOKEN=
```

---

## Sprint 1 Active Tasks (6/22 – 7/12)

- [x] Tech stack decision doc
- [ ] Initialize repo + branch strategy
- [ ] Provision hosting environments (dev + prod)
- [ ] Configure domain + DNS
- [ ] Database setup + initial schema + migrations
- [ ] README + developer documentation baseline
