import { TestListType, TextListPropsType } from '@/types'
import { ListItem, ListItemButton, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const TextList = ({ title, contentList }: TextListPropsType) => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <Stack direction='column' gap={3} alignItems={{ md: 'flex-start', xs: 'center' }}>
      <Typography component='span' variant='h5' sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>

      <Stack component={'ul'} direction='column' gap={2} alignItems={{ md: 'flex-start', xs: 'center' }}>
        {contentList.map((item: TestListType, index: number) => (
          <ListItem
            key={`index${index}`}
            disablePadding
            sx={{
              display: 'block',
              '& a': {
                padding: 0
              },
              width: 'auto'
            }}
          >
            <ListItemButton component={NavLink} to={'#'} onClick={() => handleSmoothScroll(item.link)}>
              <Typography variant='body2'>{item.text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  )
}

export default TextList
