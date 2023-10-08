import React from 'react';
import Select from './style';
import selectStarData from '@/app/lib/data';
import { SelectStarProps } from '../type';

const SelectStar = ({ starInput, editItem }: SelectStarProps) => {
  const onChangeInput = (
    e: React.ChangeEvent<HTMLSelectElement>,
    fieldName: string
  ) => {
    if (editItem) {
      if (fieldName === 'star') {
        editItem.star = e.currentTarget.value;
      }
    }
  };

  return (

    <Select name="별점" onChange={(e) => { onChangeInput(e, 'star'); starInput.onChangeInput(e); }}>
      {
        selectStarData.map(((item) => (
          <option
            key={item}
            value={item}

          >
            {item}
          </option>
        )))
      }
    </Select>
  );
};

export default SelectStar;
