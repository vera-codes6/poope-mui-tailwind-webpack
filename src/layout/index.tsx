import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import { LandingHeader } from '@/layout/Header'
import Footer from './Footer'

export const LandingLayout = () => {
  return (
    <>
      <LandingHeader />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  )
}

export const MainLayout = () => {
  return <Box sx={{ display: 'flex', minHeight: '100vh' }}></Box>
}
