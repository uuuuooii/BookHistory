import { NextRequest, NextResponse } from 'next/server';
import connect from '@/app/_lib/api/mongoose/db';
import post from '@/app/_lib/api/mongoose/schema/post';

// eslint-disable-next-line import/prefer-default-export
export const DELETE = async (request: NextRequest, { params }: any) => {
  const { id } = params;

  try {
    await connect();

    await post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
