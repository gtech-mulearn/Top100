import React from "react";
import styles from "./Faq.module.css";
import { LuChevronDown } from "react-icons/lu";

export default function Faq() {
  return (
    <div className={styles.topcoderFaq}>
      <div className={styles.faqHead}>
        <h1>Frequently Asked Questions</h1>
        <p>Have questions? We've got answers!</p>
      </div>

      <details className={styles.faq}>
        <summary className={styles.question}>
          What is Top 100 Coders? <LuChevronDown className={styles.chev} />{" "}
        </summary>
        <p className={styles.answer}>
          <b>
            Kerala's Top 100 Coders, is an initative to recognize and empower
            the best coders across the nation. By making them do various coding
            activities and tasks. 
          </b>
        </p>
      </details>
      <details className={styles.faq}>
        <summary className={styles.question}>
          What happens after the selection process?{" "}
          <LuChevronDown className={styles.chev} />
        </summary>
        <p className={styles.answer}>
          <b>
            The event will be having 3 rounds. The first round will be a coding
            challenge, the second round will be a one where daily tasks will be
            given and the third round will be the finals.
          </b>
        </p>
      </details>
      <details className={styles.faq}>
        <summary className={styles.question}>
          How do I apply? <LuChevronDown className={styles.chev} />
        </summary>
        <p className={styles.answer}>
          <b>
            You can apply by clicking on the register button on the top right
            corner of the page. You will be redirected to the registration page.
            Fill in the details and you will be registered.
          </b>
        </p>
      </details>
    </div>
  );
}
