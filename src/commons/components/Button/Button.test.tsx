import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render button', () => {
    const { getAllByText } = render(<Button>Button primary</Button>);
    expect(getAllByText(/Button primary/i).length).toBe(1);
  });
});