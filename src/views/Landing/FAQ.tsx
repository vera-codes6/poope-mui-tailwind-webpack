import { Section, SectionTitle } from '@/components/Section/'
import TextList from '@/components/TextList'
import { FAQList } from '@/constants'
import { HeaderLogo } from '@/layout/components'
import { Container, Stack, styled, Typography, Box } from '@mui/material'

const FAQBox = styled(Section)(({ theme }) => ({
  height: 'auto',
  paddingTop: '100px',
  paddingBottom: '32px',

  [theme.breakpoints.down('md')]: {
    paddingTop: '50px'
  }
}))

export const FAQ = (props: any) => {
  return (
    <FAQBox {...props}>
      <Container maxWidth='lg'>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          gap={'50px'}
          sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-start', xs: 'center' } }}
        >
          <Stack direction='column' gap={2} alignItems={{ md: 'flex-start', xs: 'center' }}>
            <HeaderLogo fontSize='50px' />

            <Typography variant='body2' maxWidth={'460px'} textAlign={{ md: 'left', xs: 'center' }}>
              Every bathroom break becomes a bullseye moment to embrace your inner marksman. Nail that tight deadline,
              blast through the crypto world.
            </Typography>
          </Stack>

          {FAQList.map((item, index) => (
            <TextList key={`index${index}`} title={item.title} contentList={item.contentList} />
          ))}
        </Stack>
      </Container>
    </FAQBox>
  )
}
