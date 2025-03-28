import { Section } from '@/components/Section'
import { LandingHeader } from '@/layout/Header'
import { Button, Container, Stack, styled, Typography, useColorScheme } from '@mui/material'
import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ErrorBox = styled(Section)({
  justifyContent: 'center'
})

export const NotFound = (props: any) => {
  const { mode } = useColorScheme()
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <>
      <LandingHeader />

      <ErrorBox sectionId='error' {...props}>
        <Container maxWidth='md' component={Stack} alignItems='center' gap={3}>
          {mode && <img src={`/assets/images/${mode}404.png`} alt='Error Image' loading='lazy' />}

          <Stack direction='column' gap={2} alignItems='center' maxWidth='676px'>
            <Typography variant='h2' fontSize='clamp(32px, 9vw, 80px)'>
              Get Your Sh!t Done
            </Typography>
            <Typography
              variant='caption'
              fontSize='clamp(14px, 2vw, 18px)'
              lineHeight='clamp(20px, 3vw, 26px)'
              textAlign='center'
              sx={theme => ({
                color: '#9f9f9f',
                ...theme.applyStyles('light', {
                  color: '#747474'
                })
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa
              nec nam molestie urna, iaculis sed.
            </Typography>
          </Stack>

          <Button variant='contained' color='primary' sx={{ padding: '8px 20px' }} onClick={handleClick}>
            Back to home
          </Button>
        </Container>
      </ErrorBox>
    </>
  )
}
