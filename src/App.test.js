import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello jenkins autodeploy job/i);
  expect(linkElement).toBeInTheDocument();
});
