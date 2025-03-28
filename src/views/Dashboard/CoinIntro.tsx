import PriceRate from '@/components/PriceRate'
import { buttonList, coinIntroList } from '@/constants'
import { useDeviceType } from '@/hooks'
import { colors } from '@/theme/themePrimitives'
import { toNumberTag } from '@/utils'
import { Divider, IconButton, List, ListItem, Stack, styled, Typography } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'

const CoinButton = styled(IconButton)(({ theme }) => ({
  borderColor: 'transparent !important',
  background: '#343434 !important',
  color: colors['white'],

  ...theme.applyStyles('light', {
    borderColor: [colors['white'] + '!important'],
    background: [colors['dark'] + '!important']
  })
}))

export const CoinIntro = () => {
  const { isMobile } = useDeviceType()

  return (
    <Stack direction='column' gap={2} width='100%'>
      <Typography variant='subtitle2' fontSize='clamp(14px, 2vw, 18px)'>
        Total Poopie Balance
      </Typography>

      <Stack direction='column' gap={3}>
        <Stack direction={{ md: 'row', xs: 'column' }} gap={{ md: '19px', xs: '14px' }} justifyContent='space-between'>
          <Stack direction='row' gap='19px' alignItems='flex-end'>
            <Typography variant='body1' fontSize='clamp(50px, 7vw, 60px)' lineHeight='normal'>
              {toNumberTag(54860)}
            </Typography>

            <Typography variant='body1' fontSize='clamp(24px, 3.5vw, 32px)' lineHeight='normal'>
              {isMobile ? '$POI' : '$POOPE'}
            </Typography>
          </Stack>

          <Stack
            direction={{ md: 'row', xs: 'column' }}
            gap={{ md: '19px', xs: '14px' }}
            alignItems={{ md: 'flex-end', xs: 'flex-start' }}
          >
            <Typography
              variant='caption'
              fontSize='clamp(16px, 2.5vw, 24px)'
              lineHeight='normal'
              fontWeight='400'
              textAlign='right'
              color={colors['gray']}
            >
              {toNumberTag(62340.48, 2, '$')}
            </Typography>

            <PriceRate price={1.2} fontSize='14px' />
          </Stack>
        </Stack>

        <Stack direction={{ md: 'row', xs: 'column' }} alignItems='center' justifyContent='space-between' gap={3}>
          <List
            component={Stack}
            direction='row'
            gap={4}
            alignItems='center'
            justifyContent='space-around'
            padding={'0 !important'}
            width={{ md: 'auto', xs: '100%' }}
          >
            {coinIntroList.map((item, index) => (
              <Fragment key={`index${index}`}>
                {index > 0 && <Divider orientation='vertical' flexItem />}
                <ListItem
                  component={Stack}
                  direction='column'
                  gap={1}
                  alignItems='flex-start'
                  sx={{ padding: 0 }}
                  width='auto !important'
                >
                  <Typography variant='subtitle2' component={'p'} color={colors['gray']} fontSize='14px'>
                    {item.date}
                  </Typography>
                  <PriceRate price={item.price} type='outlined' />
                </ListItem>
              </Fragment>
            ))}
          </List>

          <List
            component={Stack}
            direction='row'
            gap={3}
            alignItems='center'
            padding={'0 !important'}
            width={{ md: 'auto', xs: '100%' }}
          >
            {buttonList.map((item, index) => (
              <ListItem
                key={`index${index}`}
                component={Stack}
                direction='column'
                gap={1}
                alignItems='center'
                sx={{ padding: 0 }}
              >
                <CoinButton>{item.iconElement}</CoinButton>
                <Typography fontSize='14px' variant='caption' lineHeight='normal'>
                  {item.text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Stack>
  )
}
