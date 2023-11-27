import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostDataProps } from '@/lib/api/dto';
import * as S from './style';

interface ItemProps {
  postCount: number;
  item: PostDataProps;
  index: number;
  handleDelete?: (id: string) => Promise<void>;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const Item = ({
  postCount,
  item,
  index,
  handleDelete,
  isAdmin,
  editItem
}: ItemProps) => {
  return (
    <S.PostsItem
      key={item.title}
    >
      <S.ImageWrapper>
        <Image
          src={String(item.img)}
          alt="thumbnail-image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {isAdmin && editItem && (
          <S.IconWrapper>
            <S.Icon onClick={() => editItem.onClickSelecteItem(item)}>
              <Image src="/images/svg/editeIcon.svg" alt="thumbnail-image" fill />
            </S.Icon>
            <S.Icon onClick={() => handleDelete && `${handleDelete(String(item._id))}`}>
              <Image src="/images/svg/deleteIcon.svg" alt="thumbnail-image" fill />
            </S.Icon>
          </S.IconWrapper>
        )}
      </S.ImageWrapper>
      <Link href={`/detail/${item._id}`}>
        <S.Contents>
          <h3>
            <S.ItemTitle>
              {item.title}
              <S.Count>
                &nbsp;#
                {postCount - index}
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
      </Link>
    </S.PostsItem>
  );
};

export default Item;
