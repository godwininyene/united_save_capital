import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';


function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>

      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    
    </>
  ))

  return (
    <RouterProvider router={router} />
    // <>
    
    //   <h1 className='bg-red-500'>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
