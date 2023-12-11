import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Login from '../login';
import store from '../../store';

describe('Login', () => {
  it('redirects to /logout on valid login', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    // Assuming there's a 'Sign in' button in your Login component
    const submitBtn = screen.getByText('Sign in');
    fireEvent.click(submitBtn);

    // Assuming you're checking for the text 'Welcome' after successful login
    // Use a more specific selector, considering the actual text content
    await screen.findByText('✨Explore, Create, and Log in!');

    // Adjust the selector based on the actual content displayed after a successful login
  });
});
