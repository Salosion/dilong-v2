import { createBrowserRouter } from 'react-router-dom'

import { About } from '../pages/about'
import { Catalog } from '../pages/catalog'
import { Configuration } from '../pages/configuration'
import { Contacts } from '../pages/contacts'
import { Home } from '../pages/home'
import { NotFound } from '../pages/nof-found'
import { ShippingPayment } from '../pages/shipping-payment'
import { baseLayout } from './layout/baseLayout'

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <NotFound /> },
      { path: '/about', element: <About /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/configuration', element: <Configuration /> },
      { path: '/shipping-payment', element: <ShippingPayment /> },
    ],
  },
])
