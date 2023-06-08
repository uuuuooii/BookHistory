import React from 'react';
import Image from 'next/image';
import Inner from '../../components/inner';
import Element from '../../components/element';
import * as S from './style';

function Main() {
  return (
    <S.Wrapper>
      <S.Picture>
        <Image src="/images/background.jpeg" alt="book" fill />
      </S.Picture>
      <Inner>
        <S.TitleContent>
          <S.Title>독서 기록</S.Title>
          <S.Desc>완독한 책을 기록하는 공간입니다</S.Desc>
        </S.TitleContent>
        <Element />
      </Inner>
    </S.Wrapper>
  );
}

export default Main;
