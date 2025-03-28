import { AccordionOwnerState } from '@mui/material'
import { ReactNode } from 'react'

export interface Language {
  code: string
  value: string
  label: string
}

export interface MenuListType {
  link: string
  text: string
}

export interface SectionPropsType {
  sectionId: string
}

export interface SectionTitlePropsType {
  textDirection?: 'row' | 'row-reverse'
  gap?: number
  text: string
  boldText?: string
}

export interface TestListType {
  text: string
  link: string
}

export interface TextListPropsType {
  title: string
  contentList: TestListType[]
}

export interface QAContentType {
  title: string
  answer: string
  bold?: string
}

export type QAAcordionProps = QAContentType & Partial<AccordionOwnerState>

export type DialogName = 'auth'

export type DialogType = DialogName | null

export interface DialogContextPropsType {
  openDialog: (dialog: DialogType) => void
  closeDialog: () => void
  activeDialog: DialogType
}

export interface WalletButtonType {
  text: string
  startIcon: ReactNode
  endIcon?: ReactNode
}

export interface NavigationItemType {
  link: string
  text: string
  icon: ReactNode
  handleClick?: () => void
}
