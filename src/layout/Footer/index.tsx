import LanguagePicker from '@/components/LanguagePicker'
import { Typography, Stack, BottomNavigation, Divider } from '@mui/material'
import Container from '@mui/material/Container'
import { FaRegCopyright } from 'react-icons/fa6'
import React from 'react'

export default function Footer() {
  return (
    <Container maxWidth='lg'>
      <Divider />
      <BottomNavigation
        component='footer'
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column-reverse' },
          gap: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '32px',
          height: 'auto'
        }}
      >
        <Typography variant='caption'>
          <FaRegCopyright style={{ display: 'inline' }} /> Poope 2024
        </Typography>

        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          gap={2}
          sx={{
            alignItems: 'center'
          }}
        >
          <Stack direction='row' gap={2}>
            <Typography variant='caption'>Privacy Policy</Typography>
            <Typography variant='caption'>Terms & Conditions</Typography>
          </Stack>
          <LanguagePicker variant='caption' />
        </Stack>
      </BottomNavigation>
    </Container>
  )
}
