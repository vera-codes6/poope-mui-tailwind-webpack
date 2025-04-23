import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { LandingLayout, MainLayout } from '@/layout'
import { NotFound } from '@/pages/Errors/NotFound'

import { lazy } from 'react'

const Landing = lazy(() => import('@/pages/Landing'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        path: ROUTES.LANDING,
        element: <Landing />
      }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />
      },
      {
        path: ROUTES.TRANSACTIONS
        // element: <Landing />
      },
      {
        path: ROUTES.MARKET
        // element: <Landing />
      },
      {
        path: ROUTES.NOTIFICATION
        // element: <Landing />
      },
      {
        path: ROUTES.SETTINGS
        // element: <Landing />
      },
      {
        path: ROUTES.SUPPORT
        // element: <Landing />
      }
    ]
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />
  }
])

export default router
