import { chartData } from '@/constants'
import { colors } from '@/theme/themePrimitives'
import { AreaPlot, BarPlot, ChartsYAxis, LinePlot, MarkPlot, ResponsiveChartContainer } from '@mui/x-charts'

export const PriceChart = ({ chartType }: { chartType: number }) => {
  return (
    <ResponsiveChartContainer
      series={[
        {
          type: chartType === 0 ? 'line' : 'bar',
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
          scaleType: 'band'
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

          ...theme.applyStyles('light', {
            fill: 'url(#lightGradient)'
          })
        },

        '& .MuiBarElement-root': {
          fill: colors['primary'],

          ...theme.applyStyles('light', {
            fill: '#E5AE21'
          })
        },

        '& .MuiLineElement-root': {
          strokeWidth: '3px',
          stroke: colors['primary'],

          ...theme.applyStyles('light', {
            stroke: '#E5AE21'
          })
        },

        '& .MuiMarkElement-root': {
          fill: colors['primary'],
          filter: `drop-shadow(0px 0px 3px ${colors['primary']})`,

          ...theme.applyStyles('light', {
            fill: '#E5AE21',
            filter: `drop-shadow(0px 0px 3px #E5AE21)`
          }),

          '&:first-child': {
            fill: '#FF7070',
            filter: `drop-shadow(0px 0px 3px #FF7070)`
          }
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
      <BarPlot />
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
          y2='350.196'
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
          y2='350.038'
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
