import React from 'react'
import styles from './Faq.module.css'
import { LuChevronDown } from 'react-icons/lu'

export default function Faq() {
    return (
        <div className={styles.topcoderFaq}>
            <div className={styles.faqHead}>
                <h1>Frequently Asked Questions</h1>
                <p>Have questions? We've got answers!</p>
            </div>

            <details className={styles.faq}>
                <summary className={styles.question}>What is Top 100 Coders? <LuChevronDown className={styles.chev} /> </summary>
                <p className={styles.answer}>
                    <b>
                        This competition is open to anyone with a passion for coding, residing in Kerala.
                    </b>
                </p>
            </details>
            <details className={styles.faq}>
                <summary className={styles.question}>What happens after the selection process? <LuChevronDown className={styles.chev} /></summary>
                <p className={styles.answer}>
                    <b>
                        Top 100 Coders is an initiative by Gtech to recognize and empower the best coders in India.
                        We're looking for top coders who excel in the following areas: Competitive Coding,
                        Open Source, Algorithms, Community Building, and Tech Evangelism.
                    </b>
                </p>
            </details>
            <details className={styles.faq}>
                <summary className={styles.question}>How do I apply? <LuChevronDown className={styles.chev} /></summary>
                <p className={styles.answer}>
                    <b>
                        Top 100 Coders is an initiative by Gtech to recognize and empower the best coders in India.
                        We're looking for top coders who excel in the following areas: Competitive Coding,
                        Open Source, Algorithms, Community Building, and Tech Evangelism.
                    </b>
                </p>
            </details>
        </div>
    )
}
