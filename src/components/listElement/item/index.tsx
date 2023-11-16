import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PostDataProps } from '@/lib/api/dto';
import * as S from './style';

interface ItemProps {
  postData: PostDataProps[];
  item: PostDataProps;
  index: number;
  handleDelete: (id: string) => Promise<void>;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: PostDataProps | undefined;
    onClickSelecteItem: (item: PostDataProps) => void;
  };
}

const Item = ({
  postData,
  item,
  index,
  handleDelete,
  isAdmin,
  editItem
}: ItemProps) => {
  const router = useRouter();

  const onPageHandle = (id: string) => {
    router.push(`/detail?id=${id}`);
  };

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
  );
};

export default Item;
