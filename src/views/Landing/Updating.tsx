import { useKeenSlider } from 'keen-slider/react'

import { Box, Container, Stack, styled, useTheme } from '@mui/material'
import { BlogCard } from '@/components/Card'
import { Section, SectionTitle } from '@/components/Section/'
import { colors } from '@/theme/themePrimitives'

const UpdatingBox = styled(Section)(({ theme }) => ({
  justifyContent: 'center',

  backgroundColor: colors['boldLight'],
  ...theme.applyStyles('dark', {
    backgroundColor: colors['boldDark']
  })
}))

export const Updating = (props: any) => {
  const theme = useTheme()

  const [sliderRef, instanceSliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 50
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
    <UpdatingBox {...props}>
      <Container maxWidth='lg'>
        <Stack direction='column' gap={'50px'} sx={{ alignItems: 'center' }}>
          <SectionTitle gap={2.5} text='STAY' boldText='Updated' />
        </Stack>

        <Box ref={sliderRef} className='keen-slider' sx={{ py: '50px' }}>
          {[1, 2, 3].map((value, index) => (
            <Box
              key={`index${index}`}
              className='keen-slider__slide'
              sx={{
                overflow: 'visible !important',
                height: '100%',
                maxWidth: '347px !important',
                minWidth: '347px !important'
              }}
            >
              <BlogCard blogIndex={value} />
            </Box>
          ))}
        </Box>
      </Container>
    </UpdatingBox>
  )
}
