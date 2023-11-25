'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { PostDataProps } from '@/lib/api/dto';
import Inner from '@/components/inner';
import * as S from './style';
import postDataList from '@/lib/recoil/atom';

const PostDetail = () => {
  const [selectedPost, setSelectedPost] = useState<PostDataProps>();
  const [postData, setPostData] = useRecoilState(postDataList);
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  useEffect(() => {
    const data = postData.find((item) => item._id === postId);
    setSelectedPost(data);
  }, [postId, postData]);

  return (
    <div>
      <Inner>
        <S.ContentWrapper>
          <S.Picture>
            {selectedPost && <Image src={String(selectedPost?.img)} alt="image" fill />}
          </S.Picture>
          <S.Title>{selectedPost?.title}</S.Title>
          <S.Data>{selectedPost?.updatedAt?.substring(0, 10)}</S.Data>
          <S.Content>{selectedPost?.content}</S.Content>
        </S.ContentWrapper>
      </Inner>
    </div>
  );
};

export default PostDetail;
