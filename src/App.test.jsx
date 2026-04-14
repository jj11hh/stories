import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state before backend responds', () => {
  const originalFetch = global.fetch;
  global.fetch = () => new Promise(() => {});

  render(<App />);
  const loadingElement = screen.getByText(/connecting to backend/i);
  expect(loadingElement).toBeDefined();

  global.fetch = originalFetch;
});
