import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import CountryDetail from './components/CountryDetail.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path : "/:country",
            element: <CountryDetail/>,
           
        }
       
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />
 
)
