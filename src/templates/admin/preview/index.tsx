import React from 'react';
import Element from '@/components/element';
import Wrapper from './style';

interface PreviewProps {
  isUpload: boolean
}

const Preview = ({ isUpload }: PreviewProps) => {
  return (
    <Wrapper>
      <Element isUpload={isUpload} />
    </Wrapper>
  );
};

export default Preview;
