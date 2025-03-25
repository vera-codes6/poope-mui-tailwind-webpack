import { RouterProvider } from 'react-router-dom'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import CssBaseline from '@mui/material/CssBaseline'
import AppTheme from '@/theme/AppTheme'
import router from './routes'

import 'keen-slider/keen-slider.min.css'

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  )
}
