import { NextResponse } from 'next/server';
import connect from '@/common/api/mongoose/db';
import Post from '@/common/api/mongoose/schema/Post';

export const GET = async () => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: { json: () => any }) => {
  const body = await request.json();
  console.log(body);
  const newPost = new Post(body);
  try {
    await connect();

    await newPost.save();

    return new NextResponse('post has been created', { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
