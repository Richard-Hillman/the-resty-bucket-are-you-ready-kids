import React from 'react';
import { render, cleanup } from '@testing-library/react';
import KrestyReceipts from './KrestyReceipts';

describe('KrestyReceipts component', () => {
  afterEach(() => cleanup());
  it('renders KrestyReceipts', () => {
    const { asFragment } = render(<KrestyReceipts
     
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
