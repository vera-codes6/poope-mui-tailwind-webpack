import LanguagePicker from '@/components/LanguagePicker'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuListType } from '@/types'

interface NavbarProps {
  list: MenuListType[]
  pop?: boolean
}

export default function NavContent({ list, pop }: NavbarProps) {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <Stack
      gap={!pop ? 4 : 3}
      direction={!pop ? 'row' : 'column'}
      sx={theme => ({
        [theme.breakpoints.down('lg')]: !pop
          ? {
              width: '100%',
              justifyContent: 'flex-end',
              paddingRight: '8px'
            }
          : '',
        paddingBlock: !pop ? '16px' : 0,
        alignItems: 'center'
      })}
    >
      <List
        dense
        component={Stack}
        direction={!pop ? 'row' : 'column'}
        gap={!pop ? 4 : 3}
        sx={theme => ({
          [theme.breakpoints.down('lg')]: !pop
            ? {
                display: 'none'
              }
            : '',
          alignItems: 'center'
        })}
      >
        {list.map((item: MenuListType, index: number) => (
          <ListItem
            key={`index${index}`}
            disablePadding
            sx={{
              display: 'block',
              '& a': {
                padding: 0
              },
              width: 'auto'
            }}
          >
            <ListItemButton component={NavLink} to={'#'} onClick={() => handleSmoothScroll(item.link)}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <LanguagePicker variant='body2' />
    </Stack>
  )
}
