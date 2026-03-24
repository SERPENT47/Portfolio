import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero Component Rendering', () => {
  it('correctly mounts the user name string', () => {
    // We wrap Hero in a BrowserRouter because components may have framer-motion or Links inside
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    // Jest DOM syntax to verify the text element exists
    const nameElement = screen.getByText(/KHALIDUZZAMAN/i);
    expect(nameElement).toBeInTheDocument();
  });
});
