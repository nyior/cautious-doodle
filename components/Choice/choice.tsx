import styles from "./Choice.module.scss"

export const Choice = props =>  {
  return (

    <div className={styles.card}>
        <p>{props.text}</p>
    </div>

  )
}
