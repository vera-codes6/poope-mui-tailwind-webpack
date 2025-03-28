import LanguagePicker from '@/components/LanguagePicker'
import { Typography, Stack, Divider, Box } from '@mui/material'
import Container from '@mui/material/Container'
import { FaRegCopyright } from 'react-icons/fa6'

export default function Footer() {
  return (
    <Container maxWidth='lg'>
      <Divider />
      <Box
        component={'footer'}
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
        <Stack direction='row' alignItems='center' gap={0.5}>
          <FaRegCopyright size={20} />
          <Typography variant='caption'>Poope 2024</Typography>
        </Stack>

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
          <LanguagePicker signFontSize='16px' showDrop showLabel />
        </Stack>
      </Box>
    </Container>
  )
}
