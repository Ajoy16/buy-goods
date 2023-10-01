import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { ProductAndCartLoader } from './Loader/ProductAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/shop',
          loader: () =>{
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          loader: ProductAndCartLoader,
          
          element:<Order></Order>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        }
      ]
    },
   
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
