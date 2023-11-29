'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-16 flex w-full flex-col rounded-xl text-left shadow-xl md:flex-row">
        {children}
      </div>
    </motion.div>
  )
}
