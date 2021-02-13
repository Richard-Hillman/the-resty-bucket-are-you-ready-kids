import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MrKrabbyPattyMenu from './MrKrabbyPattyMenu';

describe('MrKrabbyPattyMenu component', () => {
  afterEach(() => cleanup());
  it('renders MrKrabbyPattyMenu', () => {
    const { asFragment } = render(<MrKrabbyPattyMenu
      url=""
      method=""
      json=""
      onSubmit={jest.fn()}
      onChange={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
