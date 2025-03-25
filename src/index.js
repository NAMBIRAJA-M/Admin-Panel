import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import{createBrowserRouter} from 'react-router-dom';
import { RouterProvider,Navigate} from 'react-router-dom';
import Layout from './components/Layout';
import Ordersmanage from './components/Ordersmanage';
import Menu from './components/Menu';
import MenuPopUp from './components/mini-components/MenuPopUp';




const ProtectedRoute = ({ children }) => {
   const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
   return isAuthenticated ? children : <Navigate to="/" />;
};


const RootComponent =() =>{


   const router= createBrowserRouter([

      {
         path:'/',
         element:    <Login />,
   
      },
      {
         path:'/',
         element: <Layout  />,
         children:[
            {
               index: true, 
               path :'dashboard',
               element:(
                  <ProtectedRoute>
                     <Dashboard />
                  </ProtectedRoute>
               
               ),
            },
            {
              
               path :'orders',
               element:(
                  <ProtectedRoute>
                     <Ordersmanage />
                  </ProtectedRoute>
               
               ),
            }, 
             {
              
               path :'menus',
               element:(
                  <ProtectedRoute>
                     <Menu />
                  </ProtectedRoute>
               
               ),
            }, 
           /*  {
             
              path :'menu/edit',
              element:(
                 <ProtectedRoute>
                    <MenuPopUp/>
                 </ProtectedRoute>
              
              ),
           } */
         ]
         
      }
   ])
   
 return  <RouterProvider router={router} />
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RootComponent />


);

