import { motion } from 'framer-motion'

import styles from "./Question.module.scss"
import { Choice } from "../Choice/choice"

export const Question = props =>  {
  const answerChoices = props.options

  var delay = 2
  var choicesComponents: any[] = []

  answerChoices.forEach(element => {
    const choice = <Choice key={element.toString()} text={element['text']} isAnswer={element['is_answer']} delay={delay}/>
    choicesComponents.push(choice)

    delay = delay+2
  });

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1, 
      transition: {delay: .8, ease: "easeOut", duration: 1}
    },
  }

  return (

    <div className={styles.card}>
        <motion.p 
          initial="hidden" 
          animate="enter"
          variants={variants}
        >
          {props.question}
        </motion.p>

        <div>
          { choicesComponents }
        </div>
    </div>

  )
}
