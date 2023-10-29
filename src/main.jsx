import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import AuthProvider from './Provider/AuthProvider'
import HomePage from './Pages/Home/HomePage'
import Account from './Pages/Account/Account'
import Collection from './Pages/Account/Collection'
import { ToastContainer } from 'react-toastify'
import AddProduct from './Pages/Account/AddProduct'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: "/account",
    element: <Account></Account>,
    children: [
      {
        path: "/account",
        element: <Collection></Collection>
      },
      {
        path: "/account/addproducts",
        element: <AddProduct></AddProduct>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}/>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
