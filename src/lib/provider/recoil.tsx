'use client';

import { RecoilRoot } from 'recoil';
import React, { PropsWithChildren } from 'react';

const RecoilProvider = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
