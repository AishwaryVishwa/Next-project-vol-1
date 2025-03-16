    'use server';
    import { jwtVerify, SignJWT } from "jose";

    import { cookies } from "next/headers";
    import { redirect } from 'next/navigation';

    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    const key = new TextEncoder().encode(secretKey);


    const encrypt = async (payload) => {
        return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('1day').sign(key);
    }


    export const decrypt = async (session) => {
        try {
            const { payload } = await jwtVerify(session, key, {
                algorithms: ['HS256'],
            });
            return payload;
        } catch (error) {
            return error;
        }
    }

    export const createSession = async (userID) => {

        const expireAt = new Date(Date.now() + 60 * 60 * 1000);
        const token = await encrypt({ userID, expireAt });
        const cookie = await cookies();
        cookie.set('authToken', token, {
            httpOnly: true,
            secure: true,
            expires: expireAt,
            path:'/'
        })
        redirect('/dashboard');
    }

    export const deleteSession = async ()=>{
        const cookieStore = await cookies();
        cookieStore.delete('authToken');
        redirect('/login');
    }



