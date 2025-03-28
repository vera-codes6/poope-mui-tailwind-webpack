import { chartData } from '@/constants'
import { AreaPlot, ChartsYAxis, LinePlot, MarkPlot, ResponsiveChartContainer } from '@mui/x-charts'

export const PriceChart = () => {
  return (
    <ResponsiveChartContainer
      series={[
        {
          type: 'line',
          data: chartData,
          area: true,
          baseline: 'min',
          curve: 'linear',
          color: '#FFD258',
          yAxisId: 'y-axis-id',
          showMark: ({ value }) => value === Math.min(...chartData) || value === Math.max(...chartData)
        }
      ]}
      xAxis={[
        {
          data: new Array<number>(chartData.length).fill(0).map((_, index) => index),
          scaleType: 'linear'
        }
      ]}
      yAxis={[
        {
          valueFormatter: value => `${(value / 1000).toLocaleString()}K`,
          scaleType: 'linear',
          id: 'y-axis-id'
        }
      ]}
      height={340}
      sx={theme => ({
        '& .MuiAreaElement-root': {
          fill: 'url(#darkGradient)',
          strokeWidth: '3px',

          ...theme.applyStyles('light', {
            fill: 'url(#lightGradient)'
          })
        },

        '& .MuiChartsAxis-tickLabel': {
          fontSize: '14px !important',
          lineHeight: '18px !important',
          fontWeight: '500 !important'
        },

        '& line': {
          display: 'none'
        }
      })}
    >
      <AreaPlot />
      <LinePlot />
      <MarkPlot />
      <ChartsYAxis position='left' axisId='y-axis-id' />

      <defs>
        <linearGradient
          id='darkGradient'
          x1='360.187'
          y1='-4.49896e-07'
          x2='394.154'
          y2='500.196'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD258' />
          <stop offset='0.519451' stopOpacity='0.05' />
        </linearGradient>

        <linearGradient
          id='lightGradient'
          x1='388.303'
          y1='110.82'
          x2='394.796'
          y2='1000.038'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD258' />
          <stop offset='0.387946' stopColor='#FFD258' stopOpacity='0.3' />
          <stop offset='0.775892' stopColor='white' stopOpacity='0.05' />
        </linearGradient>
      </defs>
    </ResponsiveChartContainer>
  )
}
