import { Box, Container, styled, Typography } from '@mui/material'
import { Section } from '@/components/Section'
import { colors } from '@/theme/themePrimitives'

const HeroBox = styled(Section)({
  paddingTop: '15vh',
  background: 'url(/assets/images/bg-pattern.png) repeat'
})

const HeroImageBox = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '12%',
  width: 'clamp(145px, 25vw, 312px)',
  filter: `drop-shadow(0px 0px 50px ${colors['white']})`,

  ...theme.applyStyles('light', {
    filter: `drop-shadow(0px 0px 50px ${colors['primary']})`
  })
}))

const BannerTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 'clamp(1.8px, 1vw, 4px)',
  WebkitTextStrokeWidth: '0.5px',
  WebkitTextStrokeColor: colors['black'],

  [theme.breakpoints.down('sm')]: {
    fontWeight: 700
  }
}))

export const Hero = (props: any) => {
  return (
    <HeroBox {...props}>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
          <BannerTypography variant='h1' sx={{ fontSize: 'clamp(90px, 15vw, 200px)' }}>
            Poope
          </BannerTypography>
          <BannerTypography
            variant='h1'
            sx={{
              lineHeight: '75%',
              letterSpacing: 'clamp(6px, 1.5vw, 18px)',
              fontSize: 'clamp(100px, 20vw, 300px)'
            }}
          >
            Solana
          </BannerTypography>

          <HeroImageBox src='assets/images/poope-coin.png' alt='Poope Coin' loading='lazy' />
        </Box>

        <Typography variant='body1' sx={{ paddingTop: '70px', maxWidth: '940px', textAlign: 'center' }}>
          Every bathroom break becomes a bullseye moment to embrace your inner marksman. Nail that tight deadline, blast
          through the crypto world.
        </Typography>
      </Container>
    </HeroBox>
  )
}
