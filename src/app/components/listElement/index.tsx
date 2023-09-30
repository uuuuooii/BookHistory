'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { deletePostData, getBookPostData } from '@/app/lib/api/creatorBookPost';
import { PostDataProps } from '@/app/lib/api/dto';
import * as S from './style';

interface ElementProps {
  isUpload?: boolean;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  }
}

const ListElement = ({
  isUpload, isAdmin, editItem
}: ElementProps) => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await deletePostData(id);
    setIsDelete(true);
    alert('삭제 되었습니다');
  };

  const onPageHandle = (id: string) => {
    router.push(`/detail?id=${id}`);
  };

  useEffect(() => {
    const getPostData = async () => {
      const res = await getBookPostData();
      console.log(res.data);
      setPostData(res.data.reverse());
    };
    getPostData();
  }, [isUpload, isDelete]);

  return (
    <S.Wrapper>
      {postData.map((item, index) => (
        <S.PostsItem
          key={item.title}
        >
          <S.ImageWrapper>
            <Image src={String(item.img)} alt="thumbnail-image" fill />
            {isAdmin && editItem && (
              <S.IconWrapper>
                <S.Icon onClick={() => editItem.onClickSelecteItem(item)}>
                  <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
                <S.Icon onClick={() => handleDelete(String(item._id))}>
                  <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
                </S.Icon>
              </S.IconWrapper>
            )}
          </S.ImageWrapper>
          <S.Contents onClick={() => onPageHandle(String(item._id))}>
            <h3>

              <S.ItemTitle>
                {item.title}
                <S.Count>
                  &nbsp;#
                  {postData.length - index}
                </S.Count>
              </S.ItemTitle>
            </h3>
            <div>
              <S.Star>{item.star}</S.Star>
            </div>
            <div>
              <S.Desc>{item.content}</S.Desc>
            </div>
            <S.Data>{item.updatedAt?.substring(0, 10)}</S.Data>
          </S.Contents>
        </S.PostsItem>
      ))}
    </S.Wrapper>

  );
};

export default ListElement;
