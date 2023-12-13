'use client';

import React, { cache, useEffect, useState } from 'react';
import Image from 'next/image';
import { getDetailBookData } from '@/lib/api/creatorBookPost';
import { PostDataProps } from '@/lib/api/dto';
import Inner from '@/components/inner';
import * as S from './style';

interface DetailProps {
  params: { id: string; };
}

const Detail = ({ params: { id } }: DetailProps) => {
  const [postData, setPostData] = useState<PostDataProps>();

  useEffect(() => {
    const getPostData = cache(async () => {
      const res = await getDetailBookData(id);
      setPostData(res.data);
    });

    getPostData();
  }, []);

  return (
    <div>
      <Inner>
        <S.ContentWrapper>
          <S.Picture>
            {postData && <Image src={String(postData?.img)} alt="image" fill />}
          </S.Picture>
          <S.Title>{postData?.title}</S.Title>
          <S.Data>{postData?.updatedAt?.substring(0, 10)}</S.Data>
          <S.Content>{postData?.content}</S.Content>
        </S.ContentWrapper>
      </Inner>
    </div>
  );
};

export default Detail;
