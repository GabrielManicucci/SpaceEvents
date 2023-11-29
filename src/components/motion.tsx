'use client'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function MotionDiv({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
