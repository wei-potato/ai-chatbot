import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  // 添加secret配置，生产环境建议使用环境变量
  secret: process.env.NEXTAUTH_SECRET || 'mysecretsuperkey123456',
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized() {
      // 始终返回true，允许所有页面访问而不检查身份
      return true;
    },
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnChat = nextUrl.pathname.startsWith('/');
    //   const isOnRegister = nextUrl.pathname.startsWith('/register');
    //   const isOnLogin = nextUrl.pathname.startsWith('/login');

    //   if (isLoggedIn && (isOnLogin || isOnRegister)) {
    //     return Response.redirect(new URL('/', nextUrl as unknown as URL));
    //   }

    //   if (isOnRegister || isOnLogin) {
    //     return true; // Always allow access to register and login pages
    //   }

    //   if (isOnChat) {
    //     if (isLoggedIn) return true;
    //     return false; // Redirect unauthenticated users to login page
    //   }

    //   if (isLoggedIn) {
    //     return Response.redirect(new URL('/', nextUrl as unknown as URL));
    //   }

    //   return true;
    // },
  },
} satisfies NextAuthConfig;
