import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className="mb-14 flex w-full flex-col rounded-xl text-left shadow-xl md:flex-row">
      {children}
    </div>
  )
}
