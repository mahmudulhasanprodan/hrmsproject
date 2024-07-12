import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
     <Route index element={<Login />}></Route>
     <Route path="/home" element={<Home />}></Route>
   </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App
