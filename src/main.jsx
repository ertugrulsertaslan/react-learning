import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './HomePage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFoundPage from './NotFoundPage.jsx'
import ProfilesPage from './ProfilesPage.jsx'
import ProfilePage from './ProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
  },
  {
    path: '/profiles/:profileId',
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
