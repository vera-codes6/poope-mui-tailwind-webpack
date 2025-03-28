import { NavLink } from 'react-router-dom'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material'
import { colors } from '@/theme/themePrimitives'
import { NavigationItemType } from '@/types'
import { SideBarMenuListItems, SideBarSubListItems } from '@/constants'

const StyledListItem = styled(ListItem)({
  display: 'block',
  padding: '12px',
  color: colors['gray'],

  '& svg': {
    color: colors['gray']
  },

  '& .MuiTypography-root': {
    fontSize: '16px'
  },

  '&:hover': {
    color: colors['white'],
    '& svg': {
      color: colors['white']
    },

    '& .MuiButtonBase-root': {
      backgroundColor: 'transparent'
    }
  },

  '& .active': {
    color: colors['white'],
    '& svg': {
      color: colors['white']
    },

    '& .MuiButtonBase-root': {
      backgroundColor: 'transparent'
    }
  }
})

const NavigationItemList = ({ list }: { list: NavigationItemType[] }) => {
  return (
    <List dense sx={{ display: 'flex', flexDirection: 'column', gap: '8px', p: 0 }}>
      {list.map((item, index) => (
        <StyledListItem key={index}>
          <ListItemButton component={NavLink} to={item.link} sx={{ p: 0 }}>
            <ListItemIcon sx={{ minWidth: 0, mr: '12px' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ m: 0 }} />
          </ListItemButton>
        </StyledListItem>
      ))}
    </List>
  )
}
export function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <NavigationItemList list={SideBarMenuListItems} />
      <NavigationItemList list={SideBarSubListItems} />
    </Stack>
  )
}
