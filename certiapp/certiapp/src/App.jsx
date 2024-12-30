import React,{useState} from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Frontpage from './components/frontpage.jsx' 
import Issuecerti from './components/issuecerti.jsx'
import Viewcertificate  from './components/viewcertificate.jsx'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/"  element={<Frontpage />} />
      <Route path="/issuecerti" element={<Issuecerti />} />
      <Route path="/viewcertificate/:id" element={<Viewcertificate  />} />
      </>
    )
  )
  return (
  
    <RouterProvider router={router} />
  )
}

export default App