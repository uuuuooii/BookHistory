'use client';

import React, {
  cache, useEffect, useState, useRef
} from 'react';
import ListElement from '@/components/listElement';
import Inner from '@/components/inner';
import Wrapper from './style';
import { PostDataProps } from '@/lib/api/dto';
import { getBookPostInfiniteData } from '@/lib/api/creatorBookPost';

// TODO: 무한스크롤 리팩토링
// TODO: Observer로 변경
const Posts = () => {
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [postCount, setPostCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const isInitialRender = useRef(true);

  const handleScroll = () => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      // eslint-disable-next-line no-shadow
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // React cache function
    // React 캐시 기능을 사용하면 함수의 반환 값을 기억할 수 있어 동일한 함수를 한 번만 실행하면서 여러 번 호출할 수 있습니다.
    const getPostData = cache(async () => {
      const res = await getBookPostInfiniteData(page);
      setPostData((prev) => [...prev, ...res.data.posts.reverse()]);
      setPostCount(res.data.count);
    });

    if (!isInitialRender.current) {
      getPostData();
    } else {
      isInitialRender.current = false;
    }
  }, [page]);

  return (
    <Wrapper>
      <Inner>
        <ListElement postData={postData} postCount={postCount} />
      </Inner>
      <div />
    </Wrapper>
  );
};

export default Posts;
