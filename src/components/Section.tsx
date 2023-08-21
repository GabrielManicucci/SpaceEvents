import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: string
}

export default function Section({ children, style }: Props) {
  return <div className={style}>{children}</div>
}
