import merge from 'lodash/merge'
import { enUS as enUSAdapter, fr as frFRAdapter } from 'date-fns/locale'
import { enUS as enUSCore, frFR as frFRCore } from '@mui/material/locale'
import { enUS as enUSDate, frFR as frFRDate } from '@mui/x-date-pickers/locales'

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:gb-nir'
  },
  {
    label: 'Franch',
    value: 'fr',
    systemValue: merge(frFRDate, frFRCore),
    adapterLocale: frFRAdapter,
    icon: 'flagpack:fr'
  }
]

export const defaultLang = allLangs[0]
