'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './style';

interface ElementProps {
  id: string;
  content: string;
  desc: string;
  img: string;
  title: string;
}

const Element = () => {
  const [postData, setPostData] = useState<ElementProps[]>([]);

  useEffect(() => {
    const getPostData = async () => {
      const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store'
      });
      const data = await res.json();
      setPostData(data);
    };
    getPostData();
  }, []);

  return (
    <S.Wrapper>
      {postData.map((item) => (
        <S.PostsItem key={item.title}>
          <S.ImageWrapper>
            <Image src={item.img} alt="thumbnail-image" fill />
          </S.ImageWrapper>
          <S.Contents>
            <h3>
              <S.ItemTitle href="#">{item.title}</S.ItemTitle>
            </h3>
            <div>
              {/* <div>{item.star}</div> */}
            </div>
            <S.Date>
              {/* <S.Time>{item.readingTime}</S.Time>
              <S.Day>{item.data}</S.Day> */}
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
