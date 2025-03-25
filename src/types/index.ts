import { AccordionOwnerState } from '@mui/material'

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

export interface QAContentType {
  title: string
  answer: string
}

export interface TextListPropsType {
  title: string
  contentList: string[]
}
export type QAAcordionProps = QAContentType & Partial<AccordionOwnerState>
