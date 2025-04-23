import '@/locales/i18n'

import { RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import AppTheme from '@/theme/AppTheme'

import { DialogProvider } from './context/DialogProvider'
import Dialogs from './components/Dialogs'
import router from './routes'

export default function App() {
  return (
    <AppTheme>
      <DialogProvider>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
        <Dialogs />
      </DialogProvider>
    </AppTheme>
  )
}
