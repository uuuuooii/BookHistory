import React from 'react';
import Image from 'next/image';
import Inner from '../../components/inner';
import Element from '../../components/element';
import * as S from './style';

function Main() {
  return (
    <>
      <S.Picture>
        <Image src="/images/background.jpeg" alt="book" fill />
      </S.Picture>
      <S.Wrapper>
        <Inner>
          <S.Title>
            <h3>독서 기록</h3>
            <p>완독한 책을 기록하는 공간입니다</p>
          </S.Title>
          <Element />
        </Inner>
      </S.Wrapper>
    </>
  );
}

export default Main;
