import { NextRequest, NextResponse } from 'next/server';
import connect from '@/app/_app/api/mongoose/db';
import post from '@/app/_app/api/mongoose/schema/post';

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

  try {
    await connect();

    const editPost = await post.findOneAndReplace(
      { _id: body.id },
      {
        _id: body.newId,
        title: body.title,
        star: body.star,
        img: body.img,
        content: body.content,
      }
    );

    if (!editPost) {
      return new NextResponse('Post not found', { status: 404 });
    }

    return new NextResponse('Put has been created', {
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
