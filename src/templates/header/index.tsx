import Link from 'next/link';
import React from 'react';
import * as S from './style';

function Header() {
  return (
    <S.Wrapper>
      <S.Navigation>
        <h1>
          <Link href="/">
            <S.Title>BooK History</S.Title>
          </Link>
        </h1>
        <S.NavItme>기록하기</S.NavItme>
      </S.Navigation>
    </S.Wrapper>

  );
}

export default Header;
