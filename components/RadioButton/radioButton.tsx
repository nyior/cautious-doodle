import styles from "./Radio.module.scss"

export const RadioButton = props =>  {
  return (
    <div>
        <input
            type="radio"
            className={styles.customRadio}
            id="radio"
            checked={props.isAnswer}
            readOnly={true}
        />
        <label htmlFor="radio" className={styles.label}> 
            <span>{props.text}</span>
        </label>
    </div>
  )
}