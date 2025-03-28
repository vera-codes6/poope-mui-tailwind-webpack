import { Banner, CoinIntro, PriceChartPanel } from '@/views/Dashboard'
import { Stack } from '@mui/material'

const Dashboard = () => {
  return (
    <Stack direction='row' gap={4} width='100%' px={{ md: '32px', xs: '20px' }} pb={'24px'}>
      <Stack direction='column' gap='60px' flexGrow={1}>
        <CoinIntro />
        <PriceChartPanel />
        <Banner />
      </Stack>
    </Stack>
  )
}

export default Dashboard
