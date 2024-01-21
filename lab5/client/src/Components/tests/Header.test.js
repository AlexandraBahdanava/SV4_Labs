import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('Учет работы мастеров маникюрного салона')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

    beforeEach(() => {
      localStorage.clear();
    });
  
    it('renders correctly for admin role', () => {
      localStorage.setItem('role', 'admin');
      const tree = renderer
        .create(
          <Router>
            <Header />
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('renders correctly for non-admin role', () => {
      localStorage.setItem('role', 'user');
      const tree = renderer
        .create(
          <Router>
            <Header />
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('renders correctly when role is not set', () => {
      const tree = renderer
        .create(
          <Router>
            <Header />
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('renders correctly when role is null', () => {
      localStorage.setItem('role', null);
      const tree = renderer
        .create(
          <Router>
            <Header />
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });