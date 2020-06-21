import React from 'react';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput component', () => {
  it('should render text input', () => {
    const value = "I am a testing component";
    const { getByTestId } = render(<TextInput type="text" name="textInput" value={value} />);
    expect(getByTestId("textInput")).toHaveProperty("value", value);
  });
});