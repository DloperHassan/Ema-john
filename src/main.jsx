import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './componant/Header/Header.jsx';
import Shop from './componant/Shope/Shop.jsx';
import OrderReview from './componant/Order Review/OrderReview.jsx';
import ManageInventory from './componant/Manage Inventory/ManageInventory.jsx';
import About from './componant/About/About.jsx';
import ProductDetails from './componant/ProductDetails/ProductDetails.jsx';
import Cart from './componant/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> 
      <App></App>
      <Shop></Shop>
    </div>,
  },
  {path: "/shop",
    element: <div>
      <App></App>
      <Shop></Shop>
    </div>
  },
  {path: "/review",
    element: <div>
      <App></App>
       <OrderReview></OrderReview>
        
    </div>   
  },
  {path: "/manage",
    element: <div>
      <App></App>
       <ManageInventory></ManageInventory>
    </div>   
  },
  {path: "/about",
    element: <div>
      <App></App>
        <About></About>
    </div>   
  },
  {path: "/product/:productkey",
    element: <div>
      <App></App>
      <ProductDetails></ProductDetails>
        
    </div>   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
