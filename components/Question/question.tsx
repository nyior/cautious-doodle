import styles from "./Question.module.scss"

export const Question = props =>  {
  return (

    <div className={styles.card}>
        <p>{props.question}</p>
    </div>

  )
}
