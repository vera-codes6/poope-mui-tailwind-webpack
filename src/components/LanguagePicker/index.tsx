import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

import Stack from '@mui/material/Stack'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { languageCodes } from '@/constants'
import { useLocales } from '@/hooks'

// import Translations from '@/components/Translations'
import AppIcon from '../AppIcon'
import { ButtonBase } from '@mui/material'

const LanguagePicker = (props: any) => {
  const { currentLang, onChangeLang } = useLocales()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLang.value)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    onChangeLang(language)
    handleClose()
  }

  const active = languageCodes.find(e => e.value === selectedLanguage)

  return (
    <Stack direction='row' alignItems='center'>
      <ButtonBase
        id='language-picker-button'
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ReactCountryFlag
          countryCode={active?.code.toUpperCase() || 'US'}
          style={{ width: '1rem', height: '1rem', borderRadius: '100px', objectFit: 'cover' }}
          title={active?.label}
          svg
        />
        <Typography ml={1} {...props}>
          {active?.value.toUpperCase()}
        </Typography>
        <AppIcon name='down' />
      </ButtonBase>

      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-picker-button'
        }}
        sx={{ mt: 1 }}
      >
        {languageCodes.map(language => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.value)}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ReactCountryFlag
              countryCode={language.code.toUpperCase()}
              style={{ width: '1rem', height: '1rem' }}
              title={language.label}
              svg
            />
            <Typography sx={{ ml: 1 }} {...props}>
              {language.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  )
}

export default LanguagePicker
