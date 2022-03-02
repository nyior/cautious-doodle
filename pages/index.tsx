import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Question } from "../components/Question/question";

const question = {
  "prompt": "Which of the below statements about electricity is not true?",
  "options": [

  ]
}

export default Home => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClimateScience Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Question question={question['prompt']} options={question['options']}/>
      </main>
    </div>
  )
}
