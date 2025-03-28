import { FaAngleRight } from 'react-icons/fa6'

import { BlogCardList } from '@/constants'
import { colors } from '@/theme/themePrimitives'
import { Button, Card, Stack, styled, Typography } from '@mui/material'

const BlogImageBox = styled('img')({
  borderRadius: '24px'
})

const StyledCard = styled(Card)({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  boxShadow: 'none',
  maxWidth: '350px',
  flexShrink: 0
})

export const BlogCard = ({ blogIndex }: { blogIndex: number }) => {
  return (
    <StyledCard>
      <Stack direction='column' gap={2} sx={{ alignItems: 'flex-start' }}>
        <BlogImageBox src={`assets/images/blog${blogIndex}.png`} alt='Blog Image' loading='lazy' />
        <Stack direction='column' gap={1}>
          <Typography variant='subtitle1'>{BlogCardList[blogIndex - 1].title}</Typography>
          <Typography
            variant='caption'
            sx={theme => ({
              color: '#9f9f9f',
              ...theme.applyStyles('light', {
                color: '#4f4f4f'
              }),

              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            })}
          >
            {BlogCardList[blogIndex - 1].content}
          </Typography>
        </Stack>

        <Button
          variant='outlined'
          color='info'
          endIcon={<FaAngleRight size={20} />}
          sx={theme => ({
            padding: '8px 16px',
            fontSize: '16px',

            ...theme.applyStyles('light', {
              backgroundColor: colors['primary']
            })
          })}
        >
          Read more
        </Button>
      </Stack>
    </StyledCard>
  )
}
