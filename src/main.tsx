
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home'
import Patient from './pages/Patient'
import Visit from './pages/Visit.js'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/patient/:id',
    element:<Patient/>
  },
  {
    path:'/visit/:id',
    element:<Visit/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
