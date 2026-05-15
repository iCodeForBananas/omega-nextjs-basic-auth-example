# omega-nextjs-basic-auth-example

A Next.js app demonstrating token-based route protection using middleware and query parameters.

## Token Auth Setup

Authentication is handled in `middleware.ts` at the project root. It protects routes matching `/dashboard/*` by checking for a valid `token` query parameter.

**Token:** `letmein`

### How it works

1. User visits `/` and enters the access token
2. On submit, the browser redirects to `/dashboard?token=<value>`
3. Middleware checks the `token` query parameter against the hardcoded value
4. If missing/invalid, returns a `401 Unauthorized`
5. If valid, the request proceeds normally

### Routes

| Route | Auth Required | Description |
|-------|--------------|-------------|
| `/` | No | Home page with token input form |
| `/dashboard` | Yes | Protected page, requires valid token param |

### Files

- `middleware.ts` — Token check logic and route matcher config
- `app/page.tsx` — Home page with token form
- `app/dashboard/page.tsx` — Protected page

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), enter the token, and submit to access the dashboard.

## Customization

To change the token, edit the `TOKEN` constant in `middleware.ts`.

To protect additional routes, update the `matcher` array in the middleware config:

```ts
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
```

## AI Prompts

### Middleware (middleware.ts)

```
Create a `middleware.ts` file at the project root of my Next.js app that exports a `middleware` function and a `config` object. The `middleware` function accepts a `NextRequest`, checks for a valid `token` query parameter, and returns a 401 response if the token is missing or does not match the expected value. If valid, call `NextResponse.next()`. Hardcode the token as a constant. Export a `config` object with a `matcher` array set to `['/dashboard/:path*']`.
```

### Home Page (app/page.tsx)

```
Create a client component at `app/page.tsx` that renders a centered form asking the user for an access token. On submit, redirect the browser to `/dashboard?token=<value>` using `window.location.href`. Use a text input with placeholder "Enter access token" and a "Submit" button.
```

### Dashboard Page (app/dashboard/page.tsx)

```
Create a server component at `app/dashboard/page.tsx` that renders a centered page with a heading "🔒 Dashboard" and a message confirming the user is authenticated. Include a link back to `/` labeled "Home".
```
