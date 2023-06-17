import React from 'react';
import * as S from './style';
import Element from '@/components/element';

interface PreviewProps {
  isUpload: boolean
}

const Preview = ({ isUpload }: PreviewProps) => {
  return (
    <S.Wrapper>
      <Element isUpload={isUpload} />
    </S.Wrapper>
  );
};

export default Preview;
