import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'
import { LandingHeader, MainHeader } from '@/layout/Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Stack } from '@mui/material'
import { Loading } from '@/pages/Loading'

export const LandingLayout = () => {
  return (
    <>
      <LandingHeader />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  )
}

export const MainLayout = () => {
  return (
    <Box
      sx={theme => ({
        display: 'flex',
        minHeight: '100vh',
        background: { md: 'url(/assets/images/bg-pattern.png) repeat', xs: 'none' }
      })}
    >
      <Sidebar />

      <Stack direction='column' gap={{ md: '18px', xs: '8px' }}>
        <MainHeader />

        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Stack>
    </Box>
  )
}
