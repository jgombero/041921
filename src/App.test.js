import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sphere logo', () => {
  render(<App />);
  const element = screen.getByText(/Sphere/i);
  expect(element).toBeInTheDocument();
});
