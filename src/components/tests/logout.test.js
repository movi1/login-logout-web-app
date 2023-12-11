import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Logout from '../logout';
import store from '../../store';

describe('Logout', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Logout />
        </MemoryRouter>
      </Provider>
    );

    // You can add more specific assertions based on your Logout component
    expect(screen.getByText('Click to the button below to sign out')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
