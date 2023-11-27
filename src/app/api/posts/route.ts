import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/api/db';
import Post from '@/lib/api/db/schema/post';

export const GET = async (req: NextRequest) => {
  const ITEM_PER_PAGE = 6;
  const page = req.nextUrl.searchParams.get('page') || 1;

  try {
    await connect();
    const count = await Post.estimatedDocumentCount({});

    const posts = await Post.find()
      .sort({ createdAt: -1 }) // createdAt 필드를 기준으로 내림차순 정렬
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (Number(page) - 1));

    const responsePayload = {
      count,
      posts,
    };

    return new NextResponse(JSON.stringify(responsePayload), {
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
  const newPost = new Post(body);
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

    const editPost = await Post.findOneAndReplace(
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
