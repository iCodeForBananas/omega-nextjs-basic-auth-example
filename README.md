# omega-nextjs-basic-auth-example

A Next.js app demonstrating HTTP Basic Authentication using middleware.

## Basic Auth Setup

Authentication is handled in `middleware.ts` at the project root. It protects routes matching `/dashboard/*` by checking the `Authorization` header for valid Basic Auth credentials.

**Credentials:** `admin` / `password`

### How it works

1. A request hits `/dashboard`
2. Middleware checks for a valid `Authorization: Basic <base64>` header
3. If missing/invalid, returns a `401` with `WWW-Authenticate` header, triggering the browser's native login prompt
4. If valid, the request proceeds normally

### Routes

| Route | Auth Required | Description |
|-------|--------------|-------------|
| `/` | No | Home page with links to both views |
| `/public` | No | Public page, accessible to everyone |
| `/dashboard` | Yes | Protected page, requires basic auth |

### Files

- `middleware.ts` — Basic auth logic and route matcher config
- `app/page.tsx` — Home page with navigation
- `app/public/page.tsx` — Public (unprotected) page
- `app/dashboard/page.tsx` — Protected page

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and click "Dashboard (Protected)" to trigger the auth prompt.

## Customization

To change credentials, edit the `USER` and `PASS` constants in `middleware.ts`. For production, use environment variables instead of hardcoded values.

To protect additional routes, update the `matcher` array in the middleware config:

```ts
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
```

## AI Prompts

### Proxy (proxy.ts)

Copy and paste this prompt to generate a reusable basic auth proxy function:

> Create a `proxy.ts` file at the project root of my Next.js app that exports a `proxy` function and a `config` object. The `proxy` function accepts a `NextRequest`, checks for a valid `Authorization: Basic <base64>` header, and returns a 401 response with `WWW-Authenticate: Basic realm="Secure Area"` if credentials are missing or invalid. If valid, call `NextResponse.next()`. Read credentials from environment variables `BASIC_AUTH_USER` and `BASIC_AUTH_PASS` via `process.env`. Extract the auth check into a separate `isAuthenticated` helper. Export a `config` object with a `matcher` array set to `['/dashboard/:path*']`. Also create a `.env.sample` file with default values for both variables. https://nextjs.org/docs/pages/api-reference/file-conventions/proxy
