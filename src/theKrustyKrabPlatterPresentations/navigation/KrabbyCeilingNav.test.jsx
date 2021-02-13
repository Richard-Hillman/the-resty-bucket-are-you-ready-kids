import React from 'react';
import { render, cleanup } from '@testing-library/react';
import KrabbyCeilingNav from './KrabbyCeilingNav';

describe('KrabbyCeilingNav component', () => {
  afterEach(() => cleanup());
  it('renders KrabbyCeilingNav', () => {
    const { asFragment } = render(<KrabbyCeilingNav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
