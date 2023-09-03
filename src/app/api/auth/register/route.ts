import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/app/_lib/api/mongoose/db';
import User from '@/app/_lib/api/mongoose/schema/user';

// eslint-disable-next-line import/prefer-default-export
export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  await connect();

  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('error', {
      status: 500,
    });
  }
};
