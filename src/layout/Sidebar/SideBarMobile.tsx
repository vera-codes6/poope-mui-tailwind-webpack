import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import { MenuContent, HeaderLogo } from '@/layout/components'
import { colors } from '@/theme/themePrimitives'
import { IconButton } from '@mui/material'
import { TfiClose } from 'react-icons/tfi'

const drawerWidth = 270

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  position: 'relative',
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    border: 'none'
  }
})

interface SidebarMobilePropsType {
  open: boolean
  toggleDrawer: () => void
}

export default function SidebarMobile({ open, toggleDrawer }: SidebarMobilePropsType) {
  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={toggleDrawer}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: colors['boldDark'],
          backgroundImage: 'none',
          padding: '24px'
        }
      }}
    >
      <HeaderLogo color='#ffffff' />

      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          mt: '50px'
        }}
      >
        <MenuContent />
      </Box>

      <IconButton
        sx={{
          position: 'absolute',
          borderColor: colors['white'],
          color: colors['white'],
          right: '24px',
          padding: '11px'
        }}
        onClick={toggleDrawer}
      >
        <TfiClose size='18px' />
      </IconButton>
    </Drawer>
  )
}
