import { useCallback, useState } from 'react'

import { colors } from '@/theme/themePrimitives'
import { Box, ButtonBase, Menu, MenuItem, Stack, styled, Tab, Tabs, Typography } from '@mui/material'

import { QAAcordions } from '../Accordions'
import AppIcon from '../AppIcon'
import { useDeviceType } from '@/hooks'
import { QATabList } from '@/constants'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  // flexShrink: 0,
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },

  '& .MuiTabs-flexContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px'
  },

  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  border: '1px solid',
  padding: '16px 32px',
  borderRadius: '100px',
  textTransform: 'none',
  maxWidth: 'none',
  width: '100%',

  backgroundColor: colors['dark'],
  borderColor: '#313131',
  color: [colors['white'] + '!important'],

  [theme.breakpoints.up('md')]: {
    width: 'auto',
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

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: 'calc(100vw - 40px)',
  maxWidth: '600px',
  justifyContent: 'center',
  paddingBlock: '12px',

  '& .MuiTypography-root': {
    fontSize: '20px'
  }
}))

const TabPanel = ({ children, value, index }: { children: any; value: number; index: number }) => {
  return value === index && <Box>{children}</Box>
}

const LabelItem = ({ text, showIcon = true }: { text: string; showIcon?: boolean }) => {
  return (
    <Stack direction='row'>
      <Typography>{text}</Typography>
      {showIcon && <AppIcon name='down' />}
    </Stack>
  )
}

export const QATabs = () => {
  const { isMobile } = useDeviceType()
  const [tabValue, setTabValue] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleTabChange = useCallback((e: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }, [])

  const handleMenuClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleMenuChange = useCallback((value: number) => {
    setTabValue(value)
    handleClose()
  }, [])

  return (
    <Stack
      maxWidth={{ md: 'none', xs: '600px' }}
      direction={{ md: 'row', xs: 'column' }}
      gap={{ md: '100px', xs: '50px' }}
      width='100%'
      sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-start', xs: 'center' } }}
    >
      <StyledTabs
        id='tab-menu-button'
        aria-controls={open ? 'tab-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        orientation='vertical'
        value={tabValue}
        onChange={handleTabChange}
        onClick={handleMenuClick}
      >
        {QATabList.map((text, index) => (
          <StyledTab
            key={`index${index}`}
            id={`vertical-tab-${index}`}
            label={<LabelItem text={text} />}
            disableRipple
          />
        ))}
      </StyledTabs>

      {isMobile && (
        <Menu
          id='tab-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'tab-menu-button'
          }}
          sx={{
            mt: 1,
            '& .MuiList-root': {
              py: '16px'
            }
          }}
        >
          {QATabList.map((text, index) => (
            <StyledMenuItem
              key={`index${index}`}
              onClick={() => handleMenuChange(index)}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LabelItem text={text} showIcon={false} />
            </StyledMenuItem>
          ))}
        </Menu>
      )}

      <TabPanel value={tabValue} index={0}>
        <QAAcordions />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <QAAcordions />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <QAAcordions />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <QAAcordions />
      </TabPanel>
    </Stack>
  )
}
