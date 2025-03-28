import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MenuContent, HeaderLogo } from '@/layout/components'
import { colors } from '@/theme/themePrimitives'

const drawerWidth = 220

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    border: 'none'
  }
})

export default function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: colors['boldDark'],
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
    </Drawer>
  )
}
