import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('should render checkbox', () => {
    const { getAllByText } = render(<Checkbox name="checkbox" label="Testing the checkbox component"/>);
    expect(getAllByText(/Testing the checkbox component/i).length).toBe(1);
  });

  it('should mark checkbox to checked', () => {
    const { getByTestId } = render(<Checkbox name="checkbox" label="Testing the checkbox component"/>);
    fireEvent(
      getByTestId("checkbox"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(getByTestId("checkbox")).toHaveProperty("checked", true);
  });
});