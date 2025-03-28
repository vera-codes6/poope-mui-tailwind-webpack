import { Card, CardContent, Stack } from '@mui/material'

export const SwapingCard = () => {
  return (
    <Card variant='outlined' color='primary'>
      <CardContent component={Stack} direction='column' gap={3} padding='16px'></CardContent>
    </Card>
  )
}
