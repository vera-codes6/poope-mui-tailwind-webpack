import { Stack } from '@mui/material'
import AppIcon from '../AppIcon'

const MouseDown = () => {
  return (
    <Stack
      direction='column'
      gap={1}
      sx={{ alignItems: 'center', position: 'fixed', bottom: '30px', left: 'calc(50vw - 16px)' }}
    >
      <AppIcon name='mouse' size={32} />
      <AppIcon name='arrowDown' size={20} />
    </Stack>
  )
}

export default MouseDown
