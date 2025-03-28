import { useMemo } from 'react'
import { LuMoveUpRight, LuMoveDownRight } from 'react-icons/lu'

import { Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { colors } from '@/theme/themePrimitives'
import { toNumberTag } from '@/utils'

interface PriceRatePropsType {
  price: number
  fontSize?: string
  type?: 'contained' | 'outlined'
}

export default function PriceRate({ price, fontSize = '16px', type = 'contained', ...other }: PriceRatePropsType) {
  const formattedPrice = useMemo(() => toNumberTag(price, 5, price > 0 ? '+' : '', '%'), [price])
  const buttonType = useMemo(() => (price > 0 ? 'success' : 'failed'), [price])
  const iconButton = useMemo(
    () => (price > 0 ? <LuMoveUpRight fontSize={fontSize} /> : <LuMoveDownRight fontSize={fontSize} />),
    [price]
  )

  return (
    <Stack
      direction='row'
      gap={0.5}
      alignItems='center'
      sx={theme => ({
        ...(type === 'contained' && {
          background: alpha(colors[buttonType], 0.08),
          border: `1px solid ${colors[buttonType]}`,
          borderRadius: '32px',
          padding: '6px 12px',
          color: colors[buttonType],

          ...theme.applyStyles('light', {
            borderColor: 'transparent',
            background: colors[buttonType],
            color: colors['white']
          })
        }),

        ...(type === 'outlined' && {
          background: 'transparent',
          border: 'none',
          color: colors['white'],

          ...theme.applyStyles('light', {
            borderColor: 'transparent',
            color: colors['dark']
          }),

          '& svg': {
            color: colors[buttonType]
          }
        })
      })}
      {...other}
    >
      <Typography component={'p'} fontSize={fontSize} variant='subtitle2'>
        {formattedPrice}
      </Typography>
      {iconButton}
    </Stack>
  )
}
