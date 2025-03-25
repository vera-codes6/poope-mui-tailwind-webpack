import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { LandingLayout } from '@/layout'
import Landing from '@/pages/Landing'

const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <LandingLayout />,
    children: [
      {
        path: ROUTES.LANDING,
        element: <Landing />
      }
    ]
  }
])

export default router
