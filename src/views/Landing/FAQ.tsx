import { Section, SectionTitle } from '@/components/Section/'
import TextList from '@/components/TextList'
import { colors } from '@/theme/themePrimitives'
import { Container, Stack, styled, Typography, Box } from '@mui/material'

const FAQBox = styled(Section)(({ theme }) => ({
  height: 'auto',
  paddingTop: '100px',
  paddingBottom: '32px',

  [theme.breakpoints.down('md')]: {
    paddingTop: '50px'
  }
}))

const SitemapList = ['What is Poope', 'Buy Poope', 'FAQ']

const FoundationList = ['About', 'Tokenomics', 'Roadmap', 'Community', 'Blog']

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
            <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
              <Box component='img' sx={{ width: 48 }} alt='Footer Icon' src='/assets/images/header-logo.png' />
              <Typography variant='h3' sx={{ textTransform: 'uppercase', fontSize: '50px' }}>
                Poope
              </Typography>
            </Stack>

            <Typography variant='body2' maxWidth={'500px'} textAlign={{ md: 'left', xs: 'center' }}>
              Every bathroom break becomes a bullseye moment to embrace your inner marksman. Nail that tight deadline,
              blast through the crypto world.
            </Typography>
          </Stack>

          <TextList title='Sitemap' contentList={SitemapList} />

          <TextList title='Foundation' contentList={FoundationList} />
        </Stack>
      </Container>
    </FAQBox>
  )
}
