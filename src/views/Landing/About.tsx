import { Section, SectionTitle } from '@/components/Section'
import { Box, Stack, styled, Typography, Container, Button } from '@mui/material'
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2'

const AboutBox = styled(Section)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    paddingTop: '50px',
    paddingBottom: '80px'
  }
}))

const AboutImageBox = styled('img')(({ theme }) => ({
  width: 'clamp(395px, 50vw, 773px)',
  [theme.breakpoints.up('lg')]: {
    marginLeft: 'auto'
  }
}))

export const About = (props: any) => {
  return (
    <AboutBox {...props}>
      <Container
        maxWidth='lg'
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '20px',
          flexDirection: { lg: 'row', xs: 'column' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { lg: '50px', xs: '24px' },
            justifyContent: 'flex-start'
          }}
        >
          <SectionTitle gap={2.5} text='About' boldText='PoopeCoin' />

          <Typography variant='body1' maxWidth='640px'>
            $POOPE isn't just a Poop. An open-source peer-to-peer digital currency, favoured on Solana Network
            worldwide.
            <br />
            <br />
            At its heart, POOPECOIN is the accidental crypto movement that makes people smile and its amazing, vibrant
            community made up of friendly folks just like you! Together, we will flush to a 1 billion market cap. Plup
            down, flush up!
          </Typography>

          <Stack direction={{ lg: 'row', xs: 'column' }} gap={2}>
            <Button variant='contained' color='secondary' endIcon={<HiArrowDownRight size={24} />}>
              Buy Poope
            </Button>

            <Button variant='outlined' color='secondary' endIcon={<HiArrowUpRight size={24} />}>
              Read More
            </Button>
          </Stack>
        </Box>

        <AboutImageBox src='assets/images/toilet.png' alt='Poope Toilet' loading='lazy' />
      </Container>
    </AboutBox>
  )
}
