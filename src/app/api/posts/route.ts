import { NextRequest, NextResponse } from 'next/server';
import connect from '@/common/api/mongoose/db';
import post from '@/common/api/mongoose/schema/post';

export const GET = async () => {
  try {
    await connect();

    const posts = await post.find();

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // eslint-disable-next-line new-cap
  const newPost = new post(body);
  try {
    await connect();

    await newPost.save();

    return new NextResponse('post has been created', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  console.log(body);
  try {
    await connect();

    const editPost = await post.findById(body.id);

    editPost.title = body.title;
    editPost.star = body.star;
    editPost.img = body.img;
    editPost.content = body.content;

    await editPost.save();

    return new NextResponse('put has been created', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
