import { ComponentType, FC } from 'react'

import { useDialog } from '@/hooks/useDialog'
import { DialogName } from '@/types'
import AuthDialog from '@/views/Auth'
import { Dialog, useColorScheme } from '@mui/material'

const dialogComponents: Record<DialogName, ComponentType> = {
  auth: AuthDialog
}

const Dialogs: FC = () => {
  const { mode } = useColorScheme()

  const { activeDialog, closeDialog } = useDialog()

  const DialogComponent = activeDialog ? dialogComponents[activeDialog as DialogName] : null
  
return (
    <>
      {DialogComponent && (
        <Dialog className={mode} open={!!activeDialog} onClose={closeDialog}>
          <DialogComponent />
        </Dialog>
      )}
    </>
  )
}

export default Dialogs
