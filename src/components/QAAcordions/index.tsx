import { Accordion, AccordionDetails, AccordionSummary, Stack, styled, Typography } from '@mui/material'
import AppIcon from '../AppIcon'
import { colors } from '@/theme/themePrimitives'
import { useState } from 'react'
import { QAAcordionProps, QAContentType } from '@/types'

const QAContentList: QAContentType[] = [
  {
    title: 'A hale holds nearly 30% of Poope Coin Supply! Is this true?',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  },
  {
    title: 'Poope Coin has no utility!',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  },
  {
    title: 'Can you put a cap on Poope Coin?',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  },
  {
    title: 'Poope Coin has no developers!',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  }
]

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  boxShadow: 'none',
  border: '1px solid',
  borderRadius: '16px !important',
  padding: 'clamp(16px, 2vw, 24px)',
  margin: '0 !important',

  '& .MuiAccordionSummary-root': {
    padding: '0 !important',
    minHeight: '0 !important'
  },

  '& .MuiAccordionSummary-content': {
    margin: '0 !important',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '32px'
  },

  '& .MuiAccordionDetails-root': {
    padding: 0,
    paddingTop: '16px',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '30px'
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
  const { title, answer, ...others } = props
  return (
    <StyledAccordion {...others}>
      <AccordionSummary expandIcon={<AppIcon name='down' />}>
        <Typography variant='body1'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='caption' maxWidth='600px'>
          {answer}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  )
}

export const QAAcordions = () => {
  const [expanded, setExpanded] = useState(2)

  const handleAccordionChange = (index: number) => {
    setExpanded(expanded === index ? 0 : index)
  }

  return (
    <Stack direction='column' gap={2}>
      {QAContentList.map((item, index) => (
        <QAAcordion
          key={`index${index}`}
          title={item.title}
          answer={item.answer}
          expanded={expanded === index + 1}
          onChange={() => handleAccordionChange(index + 1)}
        />
      ))}
    </Stack>
  )
}
