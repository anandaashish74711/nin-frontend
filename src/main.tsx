import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Patient from './screen/Patient';
import Visit from './screen/Visit';
import LoginPage from './pages/Login';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dasboard'; 
import ErrorPage from './pages/Error'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/patient/:id',
    element: <Patient/>,
  },
  {
    path: '/visit/:id',
    element: <Visit />,
  },
  {
    path: '*', 
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
