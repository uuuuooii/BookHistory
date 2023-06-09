import React from 'react';
import Image from 'next/image';
import * as S from './style';

function Element() {
  return (
    <S.Wrapper>
      <li>
        <S.ImageWrapper>
          <Image src="/images/thumbnail.png" alt="thumbnail-image" fill />
        </S.ImageWrapper>
        <S.Contents>
          <h3>
            <S.ItemTitle href="#">개발자가 알아두면 좋은 ‘재현 가능한 예제’ 활용법</S.ItemTitle>
          </h3>
          <div>
            <div>⭐️⭐️⭐️</div>
          </div>
          <S.Date>
            <S.Time>10분</S.Time>
            <S.Day>2020.05.05</S.Day>
          </S.Date>
          <div>
            <S.Desc>자바스크립트를 활용하는 웹 개발자부터 SQL을 활용하는 데이터 분석가까지.....</S.Desc>
          </div>
        </S.Contents>
      </li>
    </S.Wrapper>

  );
}

export default Element;
