import { useKeenSlider } from 'keen-slider/react'

import { Section, SectionTitle } from '@/components/Section/'
import { colors } from '@/theme/themePrimitives'
import { Box, Container, Stack, styled, Typography } from '@mui/material'

const RoadmapBox = styled(Section)(({ theme }) => ({
  justifyContent: 'center',
  gap: '50px',
  alignItems: 'flex-end',
  background: 'url(/assets/images/bg-pattern.png) repeat',

  backgroundColor: colors['boldLight'],
  ...theme.applyStyles('dark', {
    backgroundColor: colors['boldDark']
  }),

  [theme.breakpoints.down('md')]: {
    height: 'auto',
    paddingTop: '50px',
    paddingBottom: '80px'
  }
}))

const RoadmapImageBox = styled('img')({
  flexShrink: 0,
  height: 'auto'
})

const RoadmapCoinImage = styled('img')({
  position: 'absolute',
  top: '-5vh',
  right: '10vw',
  transform: 'rotate(25deg)',
  width: 'clamp(70px, 15vw, 165px)'
})

export const Roadmap = (props: any) => {
  const [sliderRef, instanceSliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 10
    }
    // },
    // breakpoints: {
    //   [`(max-width: 1000px)`]: {
    //     slides: { perView: 1.9, spacing: 48 }
    //   },
    //   [`(max-width: ${theme.breakpoints.values.sm}px)`]: {
    //     slides: { perView: 1.3, spacing: 24 }
    //   }
    // }
  })

  return (
    <RoadmapBox {...props}>
      <Container maxWidth='md'>
        <Stack direction='column' gap={3} sx={{ alignItems: 'center' }}>
          <SectionTitle gap={2.5} text='OUR' boldText='Roadmap' />

          <Typography variant='body1' maxWidth='1000px' textAlign='center'>
            This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave
            the way for innovative developments.
          </Typography>
        </Stack>
      </Container>

      <Box ref={sliderRef} className='keen-slider' sx={{ maxWidth: '1400px !important' }} alignItems='center'>
        <RoadmapImageBox
          className='keen-slider__slide'
          src={`assets/images/phase-1.png`}
          alt='Phase Image'
          loading='lazy'
          sx={{
            maxWidth: '352px !important',
            minWidth: '352px !important',
            maxHeight: '250px !important',
            minHeight: '250px !important'
          }}
        />
        <RoadmapImageBox
          className='keen-slider__slide'
          src={`assets/images/phase-2.png`}
          alt='Phase Image'
          loading='lazy'
          sx={{
            maxWidth: '357px !important',
            minWidth: '357px !important',
            maxHeight: '250px !important',
            minHeight: '250px !important'
          }}
        />
        <RoadmapImageBox
          className='keen-slider__slide'
          src={`assets/images/phase-3.png`}
          alt='Phase Image'
          loading='lazy'
          sx={{
            maxWidth: '658px !important',
            minWidth: '658px !important',
            maxHeight: '280px !important',
            minHeight: '280px !important'
          }}
        />
      </Box>

      <RoadmapCoinImage src='assets/images/poope-coin.png' alt='Poope Coin' loading='lazy' />
    </RoadmapBox>
  )
}
