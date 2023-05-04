import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Tests for the Quotes page', () => {
  it('Should render the Quotes page properly', () => {
    const quotesPage = render(<Quote />);
    expect(quotesPage).toMatchSnapshot();
  });
});
