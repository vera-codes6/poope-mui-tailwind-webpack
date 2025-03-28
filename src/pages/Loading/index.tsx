import { Section } from '@/components/Section'
import { styled, Typography } from '@mui/material'

const LoadingBox = styled(Section)({
  justifyContent: 'center',
  alignItems: 'center'
})

export const Loading = (props: any) => {
  return (
    <LoadingBox sectionId='loading' {...props}>
      <img src='/assets/images/loading.gif' alt='Loaing...' loading='lazy' />
      <Typography variant='h2' textTransform='uppercase'>
        Loading...
      </Typography>
    </LoadingBox>
  )
}
