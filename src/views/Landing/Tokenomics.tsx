import { HiArrowDownRight } from 'react-icons/hi2'

import { Section, SectionTitle } from '@/components/Section'
import { colors } from '@/theme/themePrimitives'
import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'

const TokenomicsBox = styled(Section)(({ theme }) => ({
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'row',

  backgroundColor: colors['boldLight'],
  ...theme.applyStyles('dark', {
    backgroundColor: colors['boldDark']
  }),

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    paddingTop: '50px',
    paddingBottom: '80px',
    flexDirection: 'column-reverse',
    gap: '24px',
    alignItems: 'center'
  }
}))

const TokenomicsImageBox = styled('img')({
  width: 'clamp(395px, 50vw, 773px)'
})

const TokenomicsLists = styled('ul')({
  listStyle: 'disc',
  paddingLeft: '35px',
  maxWidth: '500px'
})

export const Tokenomics = (props: any) => {
  return (
    <TokenomicsBox {...props}>
      <TokenomicsImageBox src='assets/images/scroll-paper.png' alt='Poope Scroll' loading='lazy' />

      <Container
        maxWidth='lg'
        sx={theme => ({
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '20px',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          [theme.breakpoints.down('md')]: {
            height: 'auto'
          }
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { md: 'flex-start', xs: 'strech' },
            gap: '50px'
          }}
        >
          <Stack direction='column' gap={3} sx={{ alignItems: 'flex-start' }}>
            <SectionTitle textDirection='row-reverse' text='OMIC' boldText='Token' />

            <Box>
              <Typography variant='body1'>POOPE is</Typography>

              <TokenomicsLists>
                <li>100% community owned. No dev holding supply.</li>
                <li>LP 100% burnt.</li>
                <li>989 million $sc supply</li>
                <li>100% released in circulation.</li>
              </TokenomicsLists>
            </Box>
          </Stack>

          <Button variant='contained' color='secondary' endIcon={<HiArrowDownRight size={24} />}>
            Buy Poope
          </Button>
        </Box>
      </Container>
    </TokenomicsBox>
  )
}
