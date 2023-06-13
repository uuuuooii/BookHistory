import { NextResponse } from 'next/server';
import connect from '@/common/api/mongoose/db';
import post from '@/common/api/mongoose/schema/post';

export const GET = async () => {
  try {
    await connect();

    const posts = await post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: any) => {
  try {
    await connect();

    await post.create(request);

    return new NextResponse('ok', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
