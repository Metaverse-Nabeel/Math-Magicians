import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../views/HomePage';

describe('Tests for the Home page', () => {
  it('Should render the Home page properly', () => {
    const homePage = render(<HomePage />);
    expect(homePage).toMatchSnapshot();
  });
});
