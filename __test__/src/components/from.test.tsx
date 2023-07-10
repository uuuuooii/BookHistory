import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '@/components/input';

describe('Test Input', () => {
  it('allows me to type my name', () => {
    render(<Form />);

    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  });
});
