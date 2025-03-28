import React, { useCallback, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

import Stack from '@mui/material/Stack'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { languageCodes } from '@/constants'
import { useLocales } from '@/hooks'

// import Translations from '@/components/Translations'
import { ButtonBase } from '@mui/material'
import { colors } from '@/theme/themePrimitives'
import AppIcon from '@/components/AppIcon'

interface LanguagePickerPropsType {
  signFontSize?: string
  showDrop?: boolean
  showLabel?: boolean
}

const LanguagePicker = ({ signFontSize, showDrop, showLabel }: LanguagePickerPropsType) => {
  const { currentLang, onChangeLang } = useLocales()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLang.value)
  const open = Boolean(anchorEl)

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleLanguageChange = useCallback((language: string) => {
    setSelectedLanguage(language)
    onChangeLang(language)
    handleClose()
  }, [])

  const active = languageCodes.find(e => e.value === selectedLanguage)

  return (
    <Stack direction='row' alignItems='center'>
      <ButtonBase
        id='language-picker-button'
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={theme => ({
          ...(!showDrop && {
            padding: '10px 12px',
            backgroundColor: colors['boldDark'],
            borderRadius: '6px',
            '& p': {
              lineHeight: '20px'
            }
          }),

          ...theme.applyStyles('light', {
            ...(!showDrop && { backgroundColor: colors['white'] })
          })
        })}
      >
        <ReactCountryFlag
          countryCode={active?.code.toUpperCase() || 'US'}
          style={{ width: '1rem', height: '1rem', borderRadius: '100px', objectFit: 'cover' }}
          title={active?.label}
          svg
        />

        {showLabel && (
          <Typography ml={1} fontSize={signFontSize}>
            {active?.value.toUpperCase()}
          </Typography>
        )}

        {showDrop && <AppIcon name='down' />}
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
            <Typography sx={{ ml: 1 }} fontSize={signFontSize}>
              {language.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  )
}

export default LanguagePicker
