import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import NavBar from '../src/SearchBar';
import '@testing-library/jest-dom';

describe('NavBar tests', () => {
  let props = {
    searchCensys: jest.fn(),
    setValue: jest.fn(),
    setQuery: jest.fn(),
    setUrl: jest.fn(),
  };

  beforeEach(() => {
    render(<NavBar {...props} />);
  });

  it('Renders 1 button', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
  });

  it('Renders search field', () => {
    const textField = screen.getAllByRole('textbox');
    expect(textField.length).toBe(1);
  });

  it('Renders the Logo', () => {
    const logo = screen.getAllByRole('img');
    expect(logo.length).toBe(1);
  });

  it('Runs a function when search button is pressed', () => {
    const button = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(button);
    expect(props.searchCensys.mock.calls).toHaveLength(1);
  });
});
