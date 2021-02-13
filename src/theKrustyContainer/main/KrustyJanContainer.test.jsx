// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import KrustyJanContainer from './KrustyJanContainer';

describe('KrustyJan container', () => {
  it('Changes display when user inputs url', () => {
    render(<KrustyJanContainer />);   
    
    const urlInput = screen.getByPlaceholderText('Type Api Url Here');

    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('display'))
        .not.toBeEmptyDOMElement();
    });
  }
  );
});
