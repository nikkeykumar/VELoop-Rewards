import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "How do VELOOP giveaways work?",
    answer:
      "Choose a giveaway, review the requirements, and use your available VEs, SVEs or Tokens to join. Winners are selected according to the published giveaway rules.",
  },
  {
    question: "What are VEs, SVEs and Tokens?",
    answer:
      "VEs, SVEs and Tokens are reward currencies used across VELOOP. The required currency can vary depending on the giveaway.",
  },
  {
    question: "How do I enter a giveaway?",
    answer:
      "Log in to your VELOOP account, open a giveaway, review the entry fee and rules, then confirm your entry.",
  },
  {
    question: "How are giveaway winners selected?",
    answer:
      "Winners are selected after the giveaway ends according to the rules displayed for that specific giveaway.",
  },
  {
    question: "What happens if I win a prize?",
    answer:
      "You will receive instructions to claim your prize. Physical prizes may require your delivery details, while digital rewards may require a verified email.",
  },
  {
    question: "Can I get my entry fee back?",
    answer:
      "Entry fees are generally non-refundable after a successful entry unless the specific giveaway rules state otherwise.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.intro}>
          <div className={styles.icon}>
            <HelpCircle size={23} />
          </div>

          <span className={styles.eyebrow}>HAVE QUESTIONS?</span>

          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>

          <p>
            Find quick answers about giveaway entries, rewards, winners and
            prize claims.
          </p>

          <div className={styles.trustText}>
            <span className={styles.dot}></span>
            Trusted by thousands of VELOOP users
          </div>
        </div>

        {/* Right FAQ */}
        <div className={styles.faqBox}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <span className={styles.arrow}>
                    <ChevronDown size={17} />
                  </span>
                </button>

                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
