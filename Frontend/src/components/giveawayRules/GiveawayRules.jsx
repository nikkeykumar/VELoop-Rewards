import React from "react";
import {
  FileText,
  UserCheck,
  Coins,
  Trophy,
  Gift,
  AlertCircle,
} from "lucide-react";

import styles from "./GiveawayRules.module.css";

const rules = [
  {
    icon: UserCheck,
    number: "01",
    title: "Eligibility",
    description:
      "You must have a valid VELOOP account and meet the eligibility requirements shown on the giveaway details page.",
  },
  {
    icon: Coins,
    number: "02",
    title: "Entry Requirements",
    description:
      "Each giveaway has a specific entry fee. The required VEs, SVEs or Tokens will be deducted from your available balance when you join.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Valid Entries",
    description:
      "An entry is recorded only after a successful balance verification and confirmation. Duplicate entries are not allowed unless stated otherwise.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Winner Selection",
    description:
      "Winners are selected after the giveaway officially ends according to the published giveaway rules.",
  },
  {
    icon: Gift,
    number: "05",
    title: "Prize Claim",
    description:
      "Winners receive claim instructions. Physical prizes may require name, phone number and complete delivery address.",
  },
  {
    icon: AlertCircle,
    number: "06",
    title: "Important Restrictions",
    description:
      "Entries cannot be transferred or exchanged for cash. Giveaway rules may vary depending on the prize and campaign.",
  },
];

const GiveawayRules = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>RULES & GUIDELINES</span>

            <h2>Giveaway Rules</h2>

            <p>
              Everything you need to know before entering a VELOOP giveaway.
            </p>
          </div>

          <div className={styles.rulesBadge}>
            <FileText size={17} />
            <span>Read Before Joining</span>
          </div>
        </div>

        {/* Rules */}
        <div className={styles.rulesGrid}>
          {rules.map((rule) => {
            const Icon = rule.icon;

            return (
              <article className={styles.ruleCard} key={rule.number}>
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon size={20} />
                  </div>

                  <span className={styles.number}>{rule.number}</span>
                </div>

                <h3>{rule.title}</h3>

                <p>{rule.description}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className={styles.notice}>
          <div className={styles.noticeIcon}>
            <AlertCircle size={19} />
          </div>

          <div>
            <strong>Important</strong>

            <p>
              Please review the specific giveaway's terms, eligibility and entry
              requirements before confirming your participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawayRules;
