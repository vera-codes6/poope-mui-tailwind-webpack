import { Section, SectionTitle } from '@/components/Section/'
import { colors } from '@/theme/themePrimitives'
import { Container, Stack, styled, Typography } from '@mui/material'

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
  objectFit: 'cover'
})

const RoadmapCoinImage = styled('img')({
  position: 'absolute',
  top: '-5vh',
  right: '10vw',
  transform: 'rotate(25deg)',
  width: 'clamp(70px, 15vw, 165px)'
})

export const Roadmap = (props: any) => {
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

      <Stack direction='row' gap={1} sx={{ alignItems: 'center', overflowX: 'auto' }}>
        {[1, 2, 3].map((item, index) => (
          <RoadmapImageBox
            key={`index${index}`}
            src={`assets/images/phase-${index + 1}.png`}
            alt='Phase Image'
            loading='lazy'
          />
        ))}
      </Stack>

      <RoadmapCoinImage src='assets/images/poope-coin.png' alt='Poope Coin' loading='lazy' />
    </RoadmapBox>
  )
}
