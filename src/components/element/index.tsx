import React from 'react';
import Image from 'next/image';
import PostsData from '../../common/data';
import * as S from './style';

const Element = () => {
  return (
    <S.Wrapper>
      {PostsData.map((item) => (
        <S.PostsItem>
          <S.ImageWrapper>
            <Image src={item.thumbnailUrl} alt="thumbnail-image" fill />
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
              <S.Desc>{item.content}</S.Desc>
            </div>
          </S.Contents>
        </S.PostsItem>
      ))}
    </S.Wrapper>

  );
};

export default Element;
