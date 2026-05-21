'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const PASSWORD = process.env.PASSWORD;

export async function login(state: { error?: string } | undefined, formData: FormData) {
  const password = formData.get('password') as string;

  if (password !== PASSWORD) {
    return { error: 'Invalid password' };
  }

  const cookieStore = await cookies();
  cookieStore.set('session', 'authenticated', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/dashboard');
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/');
}
