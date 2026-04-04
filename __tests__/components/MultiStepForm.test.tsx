import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MultiStepForm from '@/components/contact/MultiStepForm';

// Mock matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('MultiStepForm component', () => {
  it('renders Step 1 initially', () => {
    render(<MultiStepForm />);
    expect(screen.getByText("Let's start with you")).toBeInTheDocument();
    expect(screen.getByText('Full Name *')).toBeInTheDocument();
  });

  it('shows validation error if name is empty on continue', async () => {
    render(<MultiStepForm />);
    
    // Click continue
    const continueBtn = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueBtn);

    // Wait for validation error
    expect(await screen.findByText('Name is required')).toBeInTheDocument();
  });

  it('progresses to Step 2 when name is filled', async () => {
    render(<MultiStepForm />);
    
    const nameInput = screen.getByPlaceholderText('John Doe');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    
    const continueBtn = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueBtn);

    // Wait for step 2 title
    await waitFor(() => {
      expect(screen.getByText('What do you need?')).toBeInTheDocument();
    });
  });
});
