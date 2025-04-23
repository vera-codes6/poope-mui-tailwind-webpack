import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { colorSchemes, typography, shadows, shape, breakpoints } from './themePrimitives'
import { customizations } from './customizations'

interface AppThemeProps {
  children: React.ReactNode
}

export default function AppTheme(props: AppThemeProps) {
  const { children } = props
  const theme = React.useMemo(
    () =>
      createTheme({
        // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme',
          cssVarPrefix: 'template'
        },
        colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
        typography,
        shadows,
        shape,
        breakpoints,
        components: customizations
      }),
    []
  )

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
