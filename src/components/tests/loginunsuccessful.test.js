
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import LoginFailed from '../loginUnsuccessful';
import store from '../../store';

describe('LoginFailed', () => {

  it('displays error with invalid credentials', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginFailed />
        </MemoryRouter>
      </Provider>
    );

    // Assert the error message
    expect(
      screen.getByText('Oops! Artistic License Denied 🚫') ).toBeInTheDocument();
  });
});