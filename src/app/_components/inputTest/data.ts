import { SerializedStyles, css } from '@emotion/react';

const inputSize: { [key: string]: SerializedStyles } = {
  small: css`
    padding: 7px 12px;
  `,
  medium: css`
    padding: 12px 20px;
  `,
  large: css`
    padding: 16px 20px;
  `,
};
export default inputSize;
