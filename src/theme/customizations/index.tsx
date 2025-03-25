import { Components, Theme } from '@mui/material/styles'
import { colors, gray } from '../themePrimitives'
import { upperCase } from 'lodash'

export const customizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingBlock: '12px',
        paddingInline: '20px',
        borderRadius: '100px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        lineHeight: '24px',
        variants: [
          {
            props: {
              color: 'primary',
              variant: 'contained'
            },
            style: {
              border: '1px solid',
              borderColor: colors['dark'],
              backgroundColor: colors['primary'],
              color: colors['black'],
              ...theme.applyStyles('dark', {
                borderColor: colors['white']
              })
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'contained'
            },
            style: {
              fontSize: '18px',
              fontWeight: 600,
              border: '2px solid',
              borderColor: colors['dark'],
              backgroundColor: colors['primary'],
              color: colors['black'],
              padding: '16px 32px',
              ...theme.applyStyles('dark', {
                borderColor: colors['white']
              })
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'outlined'
            },
            style: {
              fontSize: '18px',
              fontWeight: 600,
              border: '2px solid',
              borderColor: colors['dark'],
              backgroundColor: colors['white'],
              color: colors['black'],
              padding: '16px 32px',
              ...theme.applyStyles('dark', {
                borderColor: colors['white']
              })
            }
          },
          {
            props: {
              color: 'info',
              variant: 'outlined'
            },
            style: {
              fontSize: '18px',
              fontWeight: 500,
              border: '1px solid',
              borderColor: colors['dark'],
              backgroundColor: colors['white'],
              color: colors['black'],
              textTransform: 'none',
              ...theme.applyStyles('dark', {
                borderColor: colors['primary'],
                color: colors['primary'],
                backgroundColor: 'transparent'
              })
            }
          },
          {
            props: {
              variant: 'text'
            },
            style: {
              backgroundColor: 'transparent',
              color: colors['black'],
              border: '1px solid',
              borderColor: colors['dark'],
              ...theme.applyStyles('dark', {
                color: colors['white'],
                borderColor: colors['white']
              })
            }
          }
        ]
      })
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 100,
        border: '1px solid',
        borderColor: colors['dark'],
        padding: '12px',
        ...theme.applyStyles('dark', {
          borderColor: colors['white']
        })
      })
    }
  }
}
