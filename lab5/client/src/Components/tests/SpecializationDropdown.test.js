import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SpecializationDropdown from '../SpecializationDropdown';

describe('SpecializationDropdown', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(
          <SpecializationDropdown selectedSpecialization="" onSpecializationChange={() => {}} onApplyClick={() => {}} />
        );
      
        expect(getByLabelText('Специализация')).toBeTruthy();
      });


  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <SpecializationDropdown selectedSpecialization="" onSpecializationChange={() => {}} onApplyClick={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles specialization change correctly', () => {
    const mockSpecializationChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <SpecializationDropdown selectedSpecialization="" onSpecializationChange={mockSpecializationChange} onApplyClick={() => {}} />
    );
  
    // Открываем выпадающий список
    fireEvent.mouseDown(getByLabelText('Специализация'));
  
    // Выбираем значение в выпадающем списке
    fireEvent.click(getByText('Классический маникюр и педикюр'));
  
    expect(mockSpecializationChange).toHaveBeenCalledWith('Классический маникюр и педикюр');
  });
  
});
