import styles from "./Question.module.scss"
import { Choice } from "../Choice/choice"

export const Question = props =>  {
  const answerChoices = props.options;
  const choicesComponents = answerChoices.map(
    (choice) => <Choice key={choice.toString()} text={choice['text']} is_answer={choice['is_answer']}/>
  );

  return (

    <div className={styles.card}>
        <p>{props.question}</p>

        <div>
          { choicesComponents }
        </div>
    </div>

  )
}
