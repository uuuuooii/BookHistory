import { NextRequest, NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
import connect from '@/app/_lib/api/mongoose/db';
import user from '@/app/_lib/api/mongoose/schema/user';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new user({
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
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const GET = () => {};
