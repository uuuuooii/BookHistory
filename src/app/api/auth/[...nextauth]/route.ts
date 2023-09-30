import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '@/app/_lib/api/mongoose/db';
import User from '@/app/_lib/api/mongoose/schema/user';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // CredentialsProvider({
    //   id: 'credentials',
    //   name: 'Credentials',
    //   async authorize(credentials) {
    //     await connect();

    //     console.log(credentials);

    //     try {
    //       const user = User.findOne({ email: credentials.email });

    //       if (user) {
    //         // 비밀번호 체크
    //         const isPasswordCorrect = await bcrypt.compare(
    //           credentials.password,
    //           user.password
    //         );

    //         if (isPasswordCorrect) {
    //           return user;
    //         }
    //         throw new Error('');
    //       } else {
    //         throw new Error('User not found');
    //       }
    //     } catch (err) {
    //       throw new Error(err);
    //     }
    //   },
    //   credentials: undefined,
    // }),
  ],
});

export { handler as GET, handler as POST };
