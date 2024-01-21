import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popout from '../PopoutWindow/Popout';

describe('Popout', () => {
  it('renders correctly', () => {
    const mockMaster = {
      name: 'John Doe',
      features: ['Feature 1', 'Feature 2'],
    };

    const { getByText, getByLabelText } = render(<Popout master={mockMaster} closePopout={() => {}} />);

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Специализация1: Feature 1')).toBeTruthy();
    expect(getByText('Специализация2: Feature 2')).toBeTruthy();

    const closeButton = getByLabelText('close');
    expect(closeButton).toBeTruthy();
  });

  it('handles close button click correctly', () => {
    const mockMaster = {
      name: 'John Doe',
      features: ['Feature 1', 'Feature 2'],
    };

    const mockClosePopout = jest.fn();

    const { getByLabelText } = render(<Popout master={mockMaster} closePopout={mockClosePopout} />);

    const closeButton = getByLabelText('close');
    fireEvent.click(closeButton);

    expect(mockClosePopout).toHaveBeenCalled();
  });

  it('does not render when master is not provided', () => {
    const { queryByTestId } = render(<Popout master={null} closePopout={() => {}} />);

    // Query by test ID to check if the dialog is not rendered when master is null
    expect(queryByTestId('popout-dialog')).toBeNull();
  });
});
