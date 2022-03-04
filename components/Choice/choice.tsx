import { motion } from 'framer-motion'

import styles from "./Choice.module.scss"
import { RadioButton } from "../RadioButton/radioButton"

export const Choice = props =>  {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { 
      opacity: 1, x: 0, y: 0,
      transition: {
        delay: props.delay,
        duration: 1
      }
    },
    exit: { opacity: 0, x: -100, y: 0 },
  }

  return (
    <motion.div 
      initial="hidden" 
      animate="enter"
      exit="exit"
      variants={variants}
      className={styles.questionCard}
    >
      <div className={styles.content}>
        <RadioButton text={props.text} isAnswer={props.isAnswer} />
      </div>
    </motion.div>
  )
}
