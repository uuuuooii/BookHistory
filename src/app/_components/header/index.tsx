'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const scrollHandler = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 30) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <S.Wrapper isShow={isShow}>
      <S.Navigation>
        <h1>
          <Link href="/">
            <S.Title>BooK History</S.Title>
          </Link>
        </h1>
      </S.Navigation>
    </S.Wrapper>

  );
};

export default Header;
