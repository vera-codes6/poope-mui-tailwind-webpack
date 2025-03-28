import { DialogContext } from '@/context/DialogProvider'
import { DialogContextPropsType } from '@/types'
import { useContext } from 'react'

export const useDialog = (): DialogContextPropsType => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Error occured while using Dialog')
  }

  return context
}
