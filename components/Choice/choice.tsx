import styles from "./Choice.module.scss"
import { RadioButton } from "../RadioButton/radioButton"

export const Choice = props =>  {
  return (

    <div className={styles.questionCard}>
      <div className={styles.content}>
        <RadioButton text={props.text} isAnswer={props.isAnswer} />
      </div>
    </div>

  )
}


{/* <div>
    <input type="radio" className={styles.input}/>
    <span className={styles.customRadioButton}></span>
</div>
        
<p>{props.text}</p> */}