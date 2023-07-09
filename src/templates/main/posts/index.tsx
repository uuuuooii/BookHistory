import React from 'react';
import ListElement from '@/components/listElement';
import Inner from '@/components/inner';
import Wrapper from './style';

const Posts = () => {
  return (
    <Wrapper>
      <Inner>
        <ListElement />
      </Inner>
    </Wrapper>
  );
};

export default Posts;
