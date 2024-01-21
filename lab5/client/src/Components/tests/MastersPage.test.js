import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MastersPage from '../MastersPage'; // Подставьте правильный путь к вашему компоненту

describe('MastersPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MastersPage />);
    expect(getByText('Поиск')).toBeTruthy();
    // Подставьте другие проверки, если необходимо
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<MastersPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

 
  // Добавьте другие тесты, если необходимо
});
