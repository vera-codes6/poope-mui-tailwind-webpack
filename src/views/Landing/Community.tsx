import { Section, SectionTitle } from '@/components/Section'
import { colors } from '@/theme/themePrimitives'
import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'

const CommunityBox = styled(Section)(({ theme }) => ({
  justifyContent: 'center',
  backgroundColor: '#f1cf58',
  borderRadius: '50px',

  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    paddingTop: '50px',
    paddingBottom: '100px'
  }
}))

const CommunityTitle = styled(Typography)({
  color: colors['dark'],
  fontSize: 'clamp(55px, 10vw, 110px)',
  lineHeight: 'clamp(64px, 11vw, 120px)',
  letterSpacing: 'clamp(3.85px, 5vw, 7.7px)',
  textAlign: 'center',
  textTransform: 'uppercase',

  WebkitTextStrokeWidth: '2px',
  WebkitTextStrokeColor: colors['dark']
})

const CommunityNavButton = styled(Button)({
  padding: '16px 32px',
  borderColor: [colors['dark'] + '!important']
})

const CommunityImageBox = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2
}))

export const Community = (props: any) => {
  return (
    <CommunityBox {...props}>
      <Container maxWidth='lg' sx={{ zIndex: 10 }}>
        <Stack direction='column' gap={'50px'} sx={{ alignItems: 'center' }}>
          <Stack direction='column' gap={3} sx={{ alignItems: 'center' }}>
            <CommunityTitle variant='h3'>ITS A beautiful When Meme token Can bring people together</CommunityTitle>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                color: colors['dark'],
                fontWeight: 500
              }}
            >
              Join our POOPE community today.
              <br />
              It's one of the fastest growing communities on Solana! Don't miss out POOPE, $POO.
            </Typography>
          </Stack>

          <Stack direction={{ sm: 'row', xs: 'column' }} gap={3} width={{ sm: 'auto', xs: '100%' }}>
            <CommunityNavButton variant='outlined' color='secondary' endIcon={<FaDiscord size={24} />}>
              Discord
            </CommunityNavButton>

            <CommunityNavButton variant='outlined' color='secondary' endIcon={<FaXTwitter size={24} />}>
              Twitter/X
            </CommunityNavButton>
          </Stack>
        </Stack>
      </Container>

      <CommunityImageBox
        src='assets/images/human.png'
        sx={{
          right: '2vw',
          bottom: 0,
          width: 'clamp(90px, 15vw, 165px)'
        }}
      />

      <CommunityImageBox
        src='assets/images/elegant.png'
        sx={{
          right: '18vw',
          top: '450px',
          width: 'clamp(65px, 12vw, 140px)'
        }}
      />

      <CommunityImageBox
        src='assets/images/poope-coin.png'
        sx={{
          left: '30vw',
          transform: 'rotate(-35deg)',
          top: '2vh',
          width: 'clamp(75px, 10vw, 115px)'
        }}
      />
    </CommunityBox>
  )
}
