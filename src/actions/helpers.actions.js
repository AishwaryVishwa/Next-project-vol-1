'use server';

import { cookies } from "next/headers";

export async function isAuthenticated() {
    const cookie = await cookies();
    return cookie.has('authToken');
}