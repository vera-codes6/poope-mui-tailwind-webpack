import { FC, memo } from 'react'

import Stack from '@mui/material/Stack'
import { colors } from '@/theme/themePrimitives'

import SunIcon from '@/assets/icons/sun.svg'
import MoonIcon from '@/assets/icons/moon.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import DownIcon from '@/assets/icons/down.svg'
import MouseIcon from '@/assets/icons/mouse.svg'
import ArrowDownIcon from '@/assets/icons/arrowDown.svg'
import { ClassNames } from '@emotion/react'

export const ICON_MAP = {
  sun: SunIcon,
  moon: MoonIcon,
  wallet: WalletIcon,
  down: DownIcon,
  mouse: MouseIcon,
  arrowDown: ArrowDownIcon
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
  name: IconName
  size?: number
  color?: keyof typeof colors
}

const AppIcon: FC<AppIconProps> = ({ name, size = 20, color, ...props }) => {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className='app-icon'
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg': {
          width: size,
          height: size
        }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)
