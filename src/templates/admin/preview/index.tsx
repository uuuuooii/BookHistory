import React, { useState } from 'react';
import Element from '@/components/element';
import Wrapper from './style';

interface PreviewProps {
  isUpload: boolean
}

const Preview = ({ isUpload }: PreviewProps) => {
  const [edit, setEdit] = useState();
  return (
    <Wrapper>
      <Element isUpload={isUpload} isAdmin />
    </Wrapper>
  );
};

export default Preview;
