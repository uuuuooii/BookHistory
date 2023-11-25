'use client';

import React, {
  cache, useEffect, useRef, useState
} from 'react';
import Inner from '@/components/inner';
import useInput from '@/lib/hooks/useInput';
import Preview from './preview';
import {
  deletePostData, getBookPostInfiniteData, postBookCreator, putBookUpdate
} from '@/lib/api/creatorBookPost';
import AdminInput from './input';
import useSelecteItem from '@/lib/hooks/useSelecteItem';
import { PostDataProps } from '@/lib/api/dto';
import * as S from './style';

// TODO: 무한스크롤 리팩토링
const Admin = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [postData, setPostData] = useState<PostDataProps[]>([]);
  const [postCount, setPostCount] = useState<number>(0);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const titleInput = useInput();
  const imageInput = useInput();
  const contentInput = useInput();
  const starInput = useInput();
  const editItem = useSelecteItem();

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

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = {
      title: titleInput.inputValue,
      star: starInput.inputValue,
      img: imageInput.inputValue,
      content: contentInput.inputValue
    };
    const res = await postBookCreator(data);
    if (res.data) {
      alert('등록 되었습니다');
      setIsUpload(true);
    }
  };

  const onSubmitEdit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const editData = {
      id: editItem.selecteItem?._id,
      title: editItem.selecteItem?.title,
      star: editItem.selecteItem?.star,
      img: editItem.selecteItem?.img,
      content: editItem.selecteItem?.content,
    };

    const res = await putBookUpdate(editData);
    if (res.data) {
      alert('수정되었습니다');
    }
  };

  const handleSubmit = editItem.selecteItem ? onSubmitEdit : onSubmit;

  const handleDelete = async (id: string) => {
    await deletePostData(id);
    setIsDelete(true);
    alert('삭제 되었습니다');
  };

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
  }, [isUpload, isDelete, page]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <Inner>
        <S.Wrapper>
          <S.PreviewWrapper>
            <Preview
              postData={postData}
              postCount={postCount}
              editItem={editItem}
              handleDelete={handleDelete}
            />
          </S.PreviewWrapper>
          <AdminInput
            titleInput={titleInput}
            imageInput={imageInput}
            contentInput={contentInput}
            starInput={starInput}
            editItem={editItem.selecteItem}
          />
        </S.Wrapper>
      </Inner>
    </S.Form>
  );
};

export default Admin;
