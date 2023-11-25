import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/api/db';
import Post from '@/lib/api/db/schema/post';

// eslint-disable-next-line import/prefer-default-export
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
