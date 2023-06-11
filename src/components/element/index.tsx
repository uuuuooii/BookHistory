import React from 'react';
import Image from 'next/image';
import PostsData from '@/common/data';
import * as S from './style';

const Element = () => {
  return (
    <S.Wrapper>
      {PostsData.map((item) => (
        <S.PostsItem key={item.id}>
          <S.ImageWrapper>
            <Image src={item.img} alt="thumbnail-image" fill />
          </S.ImageWrapper>
          <S.Contents>
            <h3>
              <S.ItemTitle href="#">{item.title}</S.ItemTitle>
            </h3>
            <div>
              <div>{item.star}</div>
            </div>
            <S.Date>
              <S.Time>{item.readingTime}</S.Time>
              <S.Day>{item.data}</S.Day>
            </S.Date>
            <div>
              <S.Desc>{item.desc}</S.Desc>
            </div>
          </S.Contents>
        </S.PostsItem>
      ))}
    </S.Wrapper>

  );
};

export default Element;
