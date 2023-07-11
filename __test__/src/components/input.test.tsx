import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '@/app/_components/input';

describe('Test Input', () => {
  it('allows me to type my name', () => {
    render(<Input />);

    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  });
});
