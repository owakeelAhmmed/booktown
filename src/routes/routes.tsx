import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetails from '@/pages/ProductDetails';
import Addbook from '@/pages/bookAdd';
import EditBook from '@/pages/editBook';
import Signup from '@/pages/Signup';
import PrivateRoute from './privateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/addbook',
        element: (
          <PrivateRoute>
            <Addbook />
          </PrivateRoute>
        ),
      },
      {
        path: '/editbook',
        element: <EditBook />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
