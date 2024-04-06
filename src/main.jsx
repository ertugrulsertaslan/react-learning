import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
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
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'
import ListCar from './ListCar.jsx'
import MyComponent from './MyComponent.jsx'
import MyFavoriteCar from './MyFavoriteCar.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import UseEffect from './UseEffect.jsx'
import Student from './Student.jsx'
import UpdateList from './UpdateList.jsx'

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
  {
    path: '/food',
    element: <Food />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/footer',
    element: <Footer />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/list',
    element: <List />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/listCar',
    element: <ListCar />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/myComponent',
    element: <MyComponent />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/myFavoriteCar',
    element: <MyFavoriteCar />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profilePicture',
    element: <ProfilePicture />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/useEffect',
    element: <UseEffect />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/student',
    element: <Student />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/updateList',
    element: <UpdateList />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
