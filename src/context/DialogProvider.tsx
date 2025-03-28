import { DialogContextPropsType, DialogType } from '@/types'
import { createContext, FC, ReactNode, useCallback, useState } from 'react'

export const DialogContext = createContext<DialogContextPropsType | undefined>(undefined)

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null)

  const openDialog = useCallback((dialog: DialogType) => {
    setActiveDialog(dialog)
  }, [])

  const closeDialog = useCallback(() => {
    setActiveDialog(null)
  }, [])

  return <DialogContext.Provider value={{ openDialog, closeDialog, activeDialog }}>{children}</DialogContext.Provider>
}
