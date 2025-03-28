import { useCallback, useEffect, useState } from 'react'
import { GoArrowDown, GoArrowUp } from 'react-icons/go'

import { Box, Stack } from '@mui/material'
import { idList } from '@/constants'
import AppIcon from '@/components/AppIcon'

const ScrollDown = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  const scrollToSection = (index: number) => {
    const section = document.getElementById(idList[index])
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(index)
    }
  }

  const handleButtonClick = useCallback(() => {
    if (currentSectionIndex < idList.length - 1) {
      scrollToSection(currentSectionIndex + 1)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setCurrentSectionIndex(0)
    }
  }, [currentSectionIndex])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setCurrentSectionIndex(idList.length - 1)
        return
      }

      for (let i = 0; i < idList.length; i++) {
        const section = document.getElementById(idList[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (currentSectionIndex !== i) {
              setCurrentSectionIndex(i)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSectionIndex, idList])

  return (
    <Box
      className='scroll-down'
      component={Stack}
      direction='column'
      gap={1}
      sx={{ alignItems: 'center', position: 'fixed', bottom: '30px', left: 'calc(50vw - 16px)' }}
      onClick={handleButtonClick}
    >
      {currentSectionIndex < idList.length - 1 ? (
        <>
          <AppIcon name='mouse' size={32} />
          <GoArrowDown size={20} />
        </>
      ) : (
        <>
          <GoArrowUp size={20} />
          <AppIcon name='mouse' size={32} />
        </>
      )}
    </Box>
  )
}

export default ScrollDown
