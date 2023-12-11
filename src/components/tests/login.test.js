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


    const submitBtn = screen.getByText('Sign in');
    fireEvent.click(submitBtn);

   

    await screen.findByText('✨Explore, Create, and Log in!');

   
  });
});
