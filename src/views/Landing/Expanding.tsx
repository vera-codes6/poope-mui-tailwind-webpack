import QATabs from '@/components/QATabs'
import { Section, SectionTitle } from '@/components/Section/'
import { colors } from '@/theme/themePrimitives'
import { Button, Container, Stack, styled, Typography } from '@mui/material'

const ExpandingBox = styled(Section)(({ theme }) => ({
  justifyContent: 'center',
  background: 'url(/assets/images/bg-pattern.png) repeat',

  backgroundColor: colors['boldLight'],
  ...theme.applyStyles('dark', {
    backgroundColor: colors['boldDark']
  }),

  [theme.breakpoints.down('lg')]: {
    height: 'auto',
    paddingTop: '50px',
    paddingBottom: '80px'
  }
}))

const expandElement = (
  <>
    <Typography
      variant='body1'
      maxWidth='clamp(200px, 20vw, 260px)'
      sx={theme => ({
        ...theme.applyStyles('dark', {
          color: '#9f9f9f'
        }),

        [theme.breakpoints.down('lg')]: {
          textAlign: 'center'
        }
      })}
    >
      Didn't find what you looking for?
    </Typography>

    <Button variant='outlined' color='info'>
      View More
    </Button>
  </>
)

const ExpandingImageBox = styled('img')({
  position: 'absolute',
  left: 0,
  bottom: '-10vh',
  width: 'clamp(180px, 30vw, 346px)',
  zIndex: 1000
})
export const Expanding = (props: any) => {
  return (
    <ExpandingBox {...props}>
      <Container
        maxWidth='lg'
        component={Stack}
        direction='column'
        gap={{ lg: '50px', xs: '24px' }}
        sx={{ alignItems: 'center' }}
      >
        <Stack
          direction='row'
          sx={{ justifyContent: 'space-between', alignItems: 'center', width: { md: '100%', xs: 'auto' } }}
        >
          <SectionTitle gap={2.5} text='FIND OUT' boldText='More' />

          <Stack direction='row' gap={3} sx={{ alignItems: 'center', display: { lg: 'inline-flex', xs: 'none' } }}>
            {expandElement}
          </Stack>
        </Stack>

        <QATabs />

        <Stack direction='column' gap={3} sx={{ alignItems: 'center', display: { lg: 'none', xs: 'inline-flex' } }}>
          {expandElement}
        </Stack>
      </Container>

      <ExpandingImageBox src='assets/images/sheet.png' alt='Sheet Image' loading='lazy' />
    </ExpandingBox>
  )
}
