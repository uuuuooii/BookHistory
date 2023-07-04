'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { getBookPostData } from '@/common/api/creatorBookPost';
import { PostDataProps } from '@/common/api/dto';
import Inner from '@/components/inner';
import * as S from './style';

const PostDetail = () => {
  const [selectedPost, setSelectedPost] = useState<PostDataProps>();
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  useEffect(() => {
    const getPostData = async () => {
      const res = await getBookPostData();
      setPostData(res.data);
    };
    getPostData();
  }, [selectedPost]);

  useEffect(() => {
    const data = postData.find((item) => item._id === search);
    setSelectedPost(data);
  }, []);

  return (
    <S.Wrapper>
      <Inner>
        <article>
          <S.Picture>
            <Image src={String(selectedPost?.img)} alt="image" fill />
          </S.Picture>
          <S.Title>{selectedPost?.title}</S.Title>
          <S.Content>{selectedPost?.content}</S.Content>
        </article>
      </Inner>
    </S.Wrapper>
  );
};

export default PostDetail;
