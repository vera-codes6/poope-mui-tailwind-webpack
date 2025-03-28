import { useCallback, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { IoMenuSharp, IoSearchOutline } from 'react-icons/io5'

import LanguagePicker from '@/components/LanguagePicker'
import { AppBar, Avatar, Button, IconButton, Stack } from '@mui/material'
import AppIcon from '@/components/AppIcon'
import { SearchInput } from '@/components/Inputs'
import { HeaderLogo, HeaderText } from '@/layout/components'
import { useDeviceType } from '@/hooks'
import ColorModeIcon from '@/theme/ColorModeIcon'

import SidebarMobile from '../Sidebar/SideBarMobile'

export function MainHeader() {
  const { isMobile } = useDeviceType()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const toggleDrawer = useCallback(() => {
    setSidebarOpen(pre => !pre)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setIsSticky(window.pageYOffset > 18)
      })
    }
  }, [])

  return (
    <AppBar
      position='sticky'
      sx={{
        boxShadow: 0,
        backgroundImage: 'none',
        borderBottom: 'none',
        width: { md: 'calc(100vw - 220px)', xs: '100vw' },
        backgroundColor: 'transparent !important',
        padding: { md: '24px 32px', xs: '16px 20px' },

        ...(isSticky && {
          backgroundColor: 'none'
        })
      }}
    >
      <Stack direction='row' gap={4} alignItems='center' flexDirection={{ md: 'row', xs: 'column-reverse' }}>
        <Stack direction='row' alignItems='center' width='100%' gap={2}>
          <HeaderText />
          <LanguagePicker signFontSize='14px' showLabel={!isMobile} />

          <Button
            variant='text'
            color='secondary'
            endIcon={<FiChevronRight size={16} />}
            sx={{
              minWidth: '0',
              '& .MuiButton-icon': {
                ...(isMobile && {
                  margin: 0
                })
              }
            }}
          >
            {!isMobile && 'Manage'}
          </Button>
        </Stack>

        <Stack direction='row' justifyContent='space-between' width={{ md: 'auto', xs: '100%' }}>
          {isMobile && (
            <Stack direction='row' gap={1} alignItems='center'>
              <IconButton color='inherit' sx={{ p: 0, border: 0 }} onClick={toggleDrawer}>
                <IoMenuSharp />
              </IconButton>

              <HeaderLogo disableText />
            </Stack>
          )}

          <Stack direction='row' gap={{ md: 2, xs: 0.5 }} alignItems='center'>
            {isMobile && <ColorModeIcon sx={{ border: 'none' }} />}

            {isMobile ? (
              <IconButton sx={{ padding: '8px', border: 0 }}>
                <IoSearchOutline size={24} />
              </IconButton>
            ) : (
              <SearchInput />
            )}

            <IconButton sx={{ padding: '8px', border: 0 }}>
              <AppIcon name='notification' size={24} />
            </IconButton>

            <Avatar alt='Avatar' src='assets/images/avatar.png' sx={{ border: '2px solid' }} />
          </Stack>
        </Stack>
      </Stack>

      <SidebarMobile open={sidebarOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  )
}
