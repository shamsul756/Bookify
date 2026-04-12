import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import Context from './Context/Context'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

  <StrictMode>
 <Context>
   <RouterProvider router={router}/>
       <ToastContainer />
   </Context>
   
      </StrictMode>,
)
