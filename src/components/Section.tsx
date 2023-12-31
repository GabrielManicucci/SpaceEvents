'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  style?: string
}

export default function Section({ children, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className={style}>{children}</div>
    </motion.div>
  )
}
