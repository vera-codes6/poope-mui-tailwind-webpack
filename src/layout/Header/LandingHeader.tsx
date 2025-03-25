import { useCallback, useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ColorModeIcon from '@/theme/ColorModeIcon'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Button, Drawer } from '@mui/material'
import AppIcon from '@/components/AppIcon'
import Hamburger from '@/components/Hamburger'
import { MenuListType } from '@/types'
import NavContent from './NavContent'

const mainListItems: MenuListType[] = [
  { link: 'about', text: 'About' },
  { link: 'tokenomics', text: 'Tokenomics' },
  { link: 'roadmap', text: 'Roadmap' },
  { link: 'community', text: 'Community' },
  { link: 'faq', text: 'FAQ' }
]

export const LandingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(pre => !pre)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setIsSticky(window.pageYOffset > 100)
      })
    }
  }, [])

  const DrawerContent = (
    <Stack
      direction='column'
      sx={{
        paddingInline: '20px'
        //height: '100vh'
      }}
    >
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBlock: '24px'
        }}
      >
        <Stack direction='row' gap={1}>
          <Box
            component='img'
            sx={{
              height: 36,
              width: 36
            }}
            alt='Header Icon'
            src='/assets/images/header-logo.png'
          />
          <Typography variant='h3' sx={{ textTransform: ' uppercase' }}>
            Poope
          </Typography>
        </Stack>
        <Hamburger toggleMenu={toggleMenu} menuopen={menuOpen} />
      </Stack>

      <NavContent list={mainListItems} pop />

      <Stack
        direction='row'
        gap={2}
        sx={{ alignItems: 'center', paddingBlock: '24px', width: '100%', justifyContent: 'center' }}
      >
        <ColorModeIcon />
        <Button variant='contained' color='primary' startIcon={<AppIcon name='wallet' />}>
          Connect Wallet
        </Button>
      </Stack>
    </Stack>
  )

  return (
    <AppBar
      position='fixed'
      sx={{
        boxShadow: 0,
        backgroundImage: 'none',
        borderBottom: 'none',
        width: '100vw',
        backgroundColor: 'transparent !important',

        ...(isSticky && {
          backgroundColor: 'none'
        })
      }}
    >
      <Container maxWidth='lg' sx={{ py: '24px' }}>
        <Stack
          direction='row'
          sx={theme => ({
            justifyContent: 'space-between',
            alignItems: 'center'
          })}
        >
          <Stack direction='row' gap={1}>
            <Box
              component='img'
              sx={{
                height: 36,
                width: 36
              }}
              alt='Header Icon'
              src='/assets/images/header-logo.png'
            />
            <Typography variant='h3' sx={{ textTransform: 'uppercase' }}>
              Poope
            </Typography>
          </Stack>

          <NavContent list={mainListItems} />

          <Stack direction='row' gap={2} sx={{ alignItems: 'center' }}>
            <ColorModeIcon />
            <Button
              variant='contained'
              color='primary'
              startIcon={<AppIcon name='wallet' />}
              sx={theme => ({
                display: { lg: 'inline-flex', xs: 'none' }
              })}
            >
              Connect
            </Button>

            <Hamburger toggleMenu={toggleMenu} menuopen={menuOpen} />
          </Stack>
        </Stack>
      </Container>

      <Drawer open={menuOpen} onClose={toggleMenu} anchor='top'>
        {DrawerContent}
      </Drawer>
    </AppBar>
  )
}
