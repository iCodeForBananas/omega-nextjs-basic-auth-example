# omega-nextjs-basic-auth-example

A Next.js app demonstrating password-based route protection using middleware and cookie sessions.

## Auth Setup

Authentication is handled via a server action that validates a password and sets a session cookie. Middleware protects routes matching `/dashboard/*` by checking for the cookie.

**Password:** `letmein`

### How it works

1. User visits `/` and enters the password
2. Server action validates the password
3. If valid, sets an `httpOnly` session cookie and redirects to `/dashboard`
4. If invalid, shows an error message
5. Middleware checks for the session cookie on protected routes — redirects to `/` if missing

### Routes

| Route | Auth Required | Description |
|-------|--------------|-------------|
| `/` | No | Login page with password form |
| `/dashboard` | Yes | Protected page, requires valid session |

### Files

- `middleware.ts` — Session cookie check and route matcher config
- `app/page.tsx` — Login form using server action
- `app/actions/auth.ts` — Login/logout server actions
- `app/dashboard/page.tsx` — Protected page with sign-out button

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), enter the password, and submit to access the dashboard.

## Customization

To change the password, edit the `PASSWORD` constant in `app/actions/auth.ts`.

To protect additional routes, update the `matcher` array in `middleware.ts`:

```ts
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
```
