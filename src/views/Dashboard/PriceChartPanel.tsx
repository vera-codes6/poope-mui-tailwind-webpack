import { IconButton, Stack, styled, Tab, Tabs, Typography } from '@mui/material'
import { PriceChart } from './PriceChart'
import { useCallback, useState } from 'react'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'

const TypeChangeTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  }
}))

const TypeChangeTab = styled(Tab)(({ theme }) => ({
  padding: '8px 16px',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  minWidth: 0,
  minHeight: 0,

  '&.Mui-selected': {
    backgroundColor: '#343434',
    ...theme.applyStyles('light', {
      backgroundColor: colors['white']
    })
  }
}))

const StyledTypography = styled(Typography)({
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
  textTransform: 'none'
})

export const PriceChartPanel = () => {
  const [chartTypeValue, setChartTypeValue] = useState<number>(0)
  const [chartDateRangeValue, setChartDateRangeValue] = useState<number>(0)

  const handleTypeChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setChartTypeValue(newValue)
  }, [])

  const handleRangeChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setChartDateRangeValue(newValue)
  }, [])

  return (
    <Stack direction='column' gap='20px'>
      <Stack direction='row' justifyContent='space-between'>
        <TypeChangeTabs value={chartTypeValue} onChange={handleTypeChange}>
          <TypeChangeTab label={<StyledTypography color='text.primary'>Price</StyledTypography>} />
          <TypeChangeTab label={<StyledTypography color='text.primary'>Chart</StyledTypography>} />
        </TypeChangeTabs>

        <Stack direction='row'>
          <TypeChangeTabs value={chartDateRangeValue} onChange={handleRangeChange}>
            <TypeChangeTab label={<StyledTypography color='text.primary'>1H</StyledTypography>} />
            <TypeChangeTab label={<StyledTypography color='text.primary'>4H</StyledTypography>} />
            <TypeChangeTab label={<StyledTypography color='text.primary'>1D</StyledTypography>} />
            <TypeChangeTab label={<StyledTypography color='text.primary'>1M</StyledTypography>} />
          </TypeChangeTabs>

          <IconButton
            sx={theme => ({
              minHeight: 0,
              minWidth: 0,
              height: '34px',
              padding: '9px',
              border: 'none',

              ...theme.applyStyles('dark', {
                color: colors['primary']
              })
            })}
          >
            <AppIcon name='calendar' size={16} />
          </IconButton>
        </Stack>
      </Stack>

      <PriceChart />
    </Stack>
  )
}
