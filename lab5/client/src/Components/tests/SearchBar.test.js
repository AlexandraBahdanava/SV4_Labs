import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar/SearchBar';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={() => {}} />);
    
    expect(getByPlaceholderText('Введите имя мастера')).toBeTruthy();
    expect(getByText('Поиск')).toBeTruthy();
  });

  it('handles input change correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText('Введите имя мастера');

    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(inputElement.value).toBe('John');
  });

  it('handles search click correctly', () => {
    const mockSearchFunction = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={mockSearchFunction} />);
    const inputElement = getByPlaceholderText('Введите имя мастера');
    const searchButton = getByText('Поиск');

    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(searchButton);

    expect(mockSearchFunction).toHaveBeenCalledWith('John');
  });
});
