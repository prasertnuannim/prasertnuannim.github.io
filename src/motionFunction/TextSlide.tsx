import { motion } from 'framer-motion'
import React from 'react'
interface Props {
    text: String
    className: String
    delay?: number
}
    className: String
const TextSlide = ({text, className}: Props) => {
  return (
   
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.1 }}
    viewport={{ once: false }}
    className= {`${className}`}
    style={{ transitionDelay: "300ms" }}
  >
    {text}
    </motion.div>
  )
}

export default TextSlide