import { NextResponse } from 'next/server';
import connect from '@/common/api/db';
import Post from '@/models/post';

export const GET = async () => {
  try {
    await connect();

    const posts = await Post.find();
    console.log('Posts:', posts);
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    console.error(err); // 오류 로깅
    return new NextResponse('Database Error!', { status: 500 });
  }
};
