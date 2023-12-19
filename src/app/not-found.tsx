'use client';

import React from 'react';
import Link from 'next/link';
import Wrap from './style';

export default function NotFound() {
  return (
    <Wrap>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Wrap>
  );
}
