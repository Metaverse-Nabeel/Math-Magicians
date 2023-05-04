import React from 'react';
import { render } from '@testing-library/react';
import CalculatorBody from '../components/CalculatorBody';

describe('Tests for the Calculator', () => {
  it('Should render the Calculator Component properly', () => {
    const calculator = render(<CalculatorBody />);
    expect(calculator).toMatchSnapshot();
  });
});
