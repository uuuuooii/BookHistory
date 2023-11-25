'use client';

import React, { cache, useEffect, useState } from 'react';
import ListElement from '@/components/listElement';
import Inner from '@/components/inner';
import Wrapper from './style';
import { PostDataProps } from '@/lib/api/dto';
import { getBookPostData } from '@/lib/api/creatorBookPost';

const Posts = () => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);

  useEffect(() => {
    // React cache function
    // React 캐시 기능을 사용하면 함수의 반환 값을 기억할 수 있어 동일한 함수를 한 번만 실행하면서 여러 번 호출할 수 있습니다.
    const getPostData = cache(async () => {
      const res = await getBookPostData();
      setPostData(res.data.reverse());
    });

    getPostData();
  }, []);

  return (
    <Wrapper>
      <Inner>
        <ListElement postData={postData} />
      </Inner>
    </Wrapper>
  );
};

export default Posts;
