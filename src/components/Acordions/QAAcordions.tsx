import { useCallback, useState } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, Stack, styled, Typography } from '@mui/material'
import { colors } from '@/theme/themePrimitives'
import { QAAcordionProps } from '@/types'
import { QAAcordionContentList } from '@/constants'

import AppIcon from '../AppIcon'

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  boxShadow: 'none',
  border: '1px solid',
  borderRadius: '16px !important',
  padding: 'clamp(16px, 2vw, 24px)',
  margin: '0 !important',
  maxWidth: '648px',

  '&::before': {
    backgroundColor: 'transparent'
  },

  '& .MuiAccordionSummary-root': {
    padding: '0 !important',
    minHeight: '0 !important'
  },

  '& .MuiAccordionSummary-content': {
    margin: '0 !important',
    marginRight: '21px !important'
  },

  '& .MuiAccordionDetails-root': {
    padding: 0,
    paddingTop: 'clamp(8px, 2vw, 16px)'
  },

  '&.Mui-expanded': {
    margin: '0 !important',
    borderColor: colors['primary'],
    backgroundColor: 'rgba(255, 210, 88, 0.04)'
  },

  ...theme.applyStyles('light', {
    borderColor: 'rgba(20, 20, 20, 0.4)',

    '&.Mui-expanded': {
      border: '2px solid',
      borderColor: colors['dark'],
      backgroundColor: 'rgba(20, 20, 20, 0.04)'
    }
  })
}))

const QAAcordion = (props: QAAcordionProps) => {
  const { title, answer, bold, ...others } = props
  return (
    <StyledAccordion {...others}>
      <AccordionSummary expandIcon={<AppIcon name='down' />}>
        <Typography variant='body1' fontSize='clamp(18px, 3vw, 24px)' fontWeight='500'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant='caption'
          component={'p'}
          fontSize='clamp(14px, 2vw, 18px)'
          lineHeight='clamp(20px, 3vw, 30px)'
          sx={theme => ({
            '& b': {
              textTransform: 'uppercase',
              fontWeight: 500,
              color: colors['primary'],

              ...theme.applyStyles('light', {
                color: colors['dark']
              })
            }
          })}
        >
          {answer}
          <b>{bold}</b>
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  )
}

export const QAAcordions = () => {
  const [expanded, setExpanded] = useState<number>(2)

  const handleAccordionChange = useCallback((index: number) => {
    setExpanded(index)
  }, [])

  return (
    <Stack direction='column' gap={2}>
      {QAAcordionContentList.map((item, index) => (
        <QAAcordion
          key={`index${index}`}
          title={item.title}
          answer={item.answer}
          bold={item.bold}
          expanded={expanded === index + 1}
          onChange={() => handleAccordionChange(index + 1)}
        />
      ))}
    </Stack>
  )
}
