import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="/contact">Go to Contact</Button>);
    const linkElement = screen.getByRole('link', { name: /Go to Contact/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/contact');
  });

  it('renders as a button when href is absent', () => {
    render(<Button>Submit</Button>);
    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies ghost variant inline styles', () => {
    render(<Button variant="ghost">GhostBtn</Button>);
    const buttonElement = screen.getByRole('button', { name: /GhostBtn/i });
    expect(buttonElement).toHaveStyle({ background: 'transparent' });
  });
});
