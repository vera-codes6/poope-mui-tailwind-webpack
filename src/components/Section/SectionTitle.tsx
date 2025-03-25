import { colors } from '@/theme/themePrimitives'
import { SectionTitlePropsType } from '@/types'
import { Stack, styled, Typography } from '@mui/material'

const BoldTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: colors['primary'],
  ...theme.applyStyles('light', {
    WebkitTextStrokeWidth: 'clamp(1px, 0.1vw, 2px)',
    WebkitTextStrokeColor: '#000'
  })
}))

export const SectionTitle = ({ textDirection = 'row', gap = 0, text, boldText = '' }: SectionTitlePropsType) => {
  return (
    <Stack direction={textDirection} gap={gap}>
      <Typography variant='h2'> {text} </Typography>
      {boldText && <BoldTypography variant='h2'> {boldText} </BoldTypography>}
    </Stack>
  )
}
