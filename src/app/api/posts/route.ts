import { NextResponse } from 'next/server';
import connect from '@/common/api/db';
import Post from '@/models/Post';

export const GET = async () => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async () => {};
