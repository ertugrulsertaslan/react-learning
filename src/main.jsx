import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './HomePage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFoundPage from './NotFoundPage.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'
import ColorPicker from './ColorPicker.jsx'
import ComponentA from './ComponentA.jsx'
import ComponentB from './ComponentB.jsx'
import ComponentC from './ComponentC.jsx'
import ComponentD from './ComponentD.jsx'
import ComponentRef from './ComponentRef.jsx'
import Counter from './Counter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/button',
    element: <Button />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/card',
    element: <Card />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/colorPicker',
    element: <ColorPicker />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/componentA',
    element: <ComponentA />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/componentRef',
    element: <ComponentRef />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/counter',
    element: <Counter />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
