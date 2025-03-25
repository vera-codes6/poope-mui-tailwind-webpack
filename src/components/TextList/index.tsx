import { TextListPropsType } from '@/types'
import { Stack, Typography } from '@mui/material'

const TextList = ({ title, contentList }: TextListPropsType) => {
  return (
    <Stack direction='column' gap={3} alignItems={{ md: 'flex-start', xs: 'center' }}>
      <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>

      <Stack component={'ul'} direction='column' gap={2} alignItems={{ md: 'flex-start', xs: 'center' }}>
        {contentList.map((text: string, index: number) => (
          <li key={`index${index}`}>
            <Typography variant='body2'>{text}</Typography>
          </li>
        ))}
      </Stack>
    </Stack>
  )
}

export default TextList
