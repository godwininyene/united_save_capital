import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>

      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/loans' element={<Loans />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact_us' element={<Contact />}></Route>
      </Route>
    
    </>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
