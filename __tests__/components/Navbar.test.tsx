import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('Navbar component', () => {
  it('renders the logo correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('GROW')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    const toggleButton = screen.getByText('☰');
    fireEvent.click(toggleButton);
    expect(screen.getByText('✕')).toBeInTheDocument();
  });
});
