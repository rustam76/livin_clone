// import './App.css'


import  {Suspense} from "react";
import { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/home';
import ProtectedRoute from './page/Protected';
import LazzyLoad from "./page/LazzyLoad";


const Authentication = lazy(() => import('./page/auth'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LazzyLoad/>}>
        <Authentication />
      </Suspense>
      
    )
  },
  {
    path: '/home',
    element: <ProtectedRoute element={<Home/> } />
  }
])



function App() {

  return (
    <main className='my-0 mx-auto h-svh max-w-screen-sm'>
      <div className=''>
      <RouterProvider router={router} />
      </div>
    </main>
  )
}

export default App
