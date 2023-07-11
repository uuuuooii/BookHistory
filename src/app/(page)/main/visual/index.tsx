import React from 'react';
import * as S from './style';
import { Wrapper } from './style';

const Visual = () => {
  return (
    <Wrapper>
      <S.TitleContent>
        <S.Title>독서 기록</S.Title>
        <S.Desc>완독한 책을 기록하는 공간입니다</S.Desc>
      </S.TitleContent>
    </Wrapper>
  );
};

export default Visual;
