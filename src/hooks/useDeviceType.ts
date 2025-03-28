import { useMediaQuery, useTheme } from '@mui/material'

export const useDeviceType = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) // Below 600px
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')) // Above 900px

  return { isMobile, isDesktop }
}
