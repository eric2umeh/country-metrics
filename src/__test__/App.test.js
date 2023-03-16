import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import App from '../App';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';

jest.mock('../pages/HomePage');
jest.mock('../pages/DetailsPage');

describe('Test App.js with pages', () => {
  test('should render the Header and Layout components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Country Metrics');
    expect(txt).toBeInTheDocument();
  });

  test('should render the homepage', () => {
    HomePage.mockImplementation(() => <h1>Hello From Home Page</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Home Page');
    expect(txt).toBeInTheDocument();
  });

  test('should render the Details Page', () => {
    DetailsPage.mockImplementation(() => <h1>Hello From Details Page</h1>);
    render(
      <MemoryRouter initialEntries={['/details/Nigeria']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Details Page');
    expect(txt).toBeInTheDocument();
  });
});
