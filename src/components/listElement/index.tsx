'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './style';
import { getBookPostData } from '@/common/api/creatorBookPost';
import { PostDataProps } from '@/common/api/dto';

interface ElementProps {
  isUpload?: boolean;
  isAdmin?: boolean;
  onClickEditItem: (item: PostDataProps) => void
}

const ListElement = ({
  isUpload, isAdmin, onClickEditItem
}: ElementProps) => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);

  useEffect(() => {
    const getPostData = async () => {
      const res = await getBookPostData();
      setPostData(res.data);
    };
    getPostData();
  }, [isUpload]);

  return (
    <S.Wrapper>
      {postData.map((item) => (
        <S.PostsItem
          key={item.title}
        >
          <S.ImageWrapper>
            <Image src={item.img} alt="thumbnail-image" fill />
            {isAdmin && (
              <S.IconWrapper>
                <S.Icon onClick={() => onClickEditItem(item)}>
                  <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
                <S.Icon>
                  <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
              </S.IconWrapper>
            )}
          </S.ImageWrapper>
          <S.Contents>
            <h3>
              <S.ItemTitle href="#">{item.title}</S.ItemTitle>
            </h3>
            <div>
              <div>{item.star}</div>
            </div>
            <div>
              <S.Desc>{item.content}</S.Desc>
            </div>
          </S.Contents>
        </S.PostsItem>
      ))}
    </S.Wrapper>

  );
};

export default ListElement;
