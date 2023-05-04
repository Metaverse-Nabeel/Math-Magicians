import React from 'react';
import { render } from '@testing-library/react';
import CalculatorPage from '../views/CalculatorPage';

describe('Tests for the Calculator Page', () => {
  it('Should render the Calculator Page properly', () => {
    const calculatorPage = render(<CalculatorPage />);
    expect(calculatorPage).toMatchSnapshot();
  });
});
