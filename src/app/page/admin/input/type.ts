import React from 'react';
import { PostDataProps } from '@/app/lib/api/dto';

export interface InputProps {
  inputValue: string;
  onChangeInput: (e: {
    currentTarget: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  reset: () => void;
}
export interface SelectStarProps {
  starInput: InputProps;
  editItem: PostDataProps | undefined;
}

export interface AdminInputProps {
  titleInput: InputProps;
  starInput: InputProps;
  imageInput: InputProps;
  contentInput: InputProps;
  editItem: PostDataProps | undefined;
}
