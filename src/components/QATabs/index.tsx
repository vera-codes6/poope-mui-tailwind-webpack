import { colors } from '@/theme/themePrimitives'
import { Box, ButtonBase, Stack, styled, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { QAAcordions } from '../QAAcordions'
import AppIcon from '../AppIcon'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  flexShrink: 0,
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },

  '& .MuiTabs-flexContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px'
  }
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  border: '1px solid',
  padding: '16px 32px',
  borderRadius: '100px',
  textTransform: 'none',
  maxWidth: 'none',

  backgroundColor: colors['dark'],
  borderColor: '#313131',
  color: [colors['white'] + '!important'],

  [theme.breakpoints.up('md')]: {
    '& .app-icon': {
      display: 'none'
    }
  },

  [theme.breakpoints.down('md')]: {
    display: 'none'
  },

  ...theme.applyStyles('light', {
    borderColor: colors['dark'],
    backgroundColor: colors['white'],
    color: [colors['dark'] + '!important']
  }),

  '&.Mui-selected': {
    display: 'inline-flex',
    backgroundColor: colors['primary'],
    borderColor: colors['white'],
    color: [colors['dark'] + '!important'],

    ...theme.applyStyles('light', {
      borderColor: colors['dark']
    })
  },

  '& .MuiTypography-root': {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}))

const TabPanel = ({ children, value, index }: { children: any; value: number; index: number }) => {
  return value === index && <Box>{children}</Box>
}

const LabelItem = ({ text }: { text: string }) => {
  return (
    <Stack direction='row'>
      <Typography>{text}</Typography>
      <AppIcon name='down' />
    </Stack>
  )
}

const QATabs = () => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Stack
      maxWidth={{ md: 'none', xs: '600px' }}
      direction={{ md: 'row', xs: 'column' }}
      gap={{ md: '100px', xs: '50px' }}
      sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-start', xs: 'center' } }}
    >
      <StyledTabs orientation='vertical' value={tabValue} onChange={handleTabChange}>
        <StyledTab id='vertical-tab-1' label={<LabelItem text='Frequently Asked Questions' />} disableRipple />
        <StyledTab id='vertical-tab-2' label={<LabelItem text='Resources' />} disableRipple />
        <StyledTab id='vertical-tab-3' label={<LabelItem text="How to's" />} disableRipple />
        <StyledTab id='vertical-tab-4' label={<LabelItem text='Documentation' />} disableRipple />
      </StyledTabs>

      <TabPanel value={tabValue} index={0}>
        <QAAcordions />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Resource
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        How to's
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Documentation
      </TabPanel>
    </Stack>
  )
}

export default QATabs
