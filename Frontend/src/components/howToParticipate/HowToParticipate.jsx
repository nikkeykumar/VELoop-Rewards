import React from "react";
import {
  UserPlus,
  ListChecks,
  Coins,
  TicketCheck,
  Trophy,
  ArrowRight,
} from "lucide-react";

import styles from "./HowToParticipate.module.css";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up or Login",
    description:
      "Create your VELOOP account or login to your existing account.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Complete Tasks",
    description: "Complete available tasks and activities to earn rewards.",
  },
  {
    number: "03",
    icon: Coins,
    title: "Earn Entries",
    description: "Build your VEs, SVEs or Tokens and unlock giveaway entries.",
  },
  {
    number: "04",
    icon: TicketCheck,
    title: "Join Giveaway",
    description: "Choose your favorite giveaway and use your balance to enter.",
  },
  {
    number: "05",
    icon: Trophy,
    title: "Winner Selected",
    description: "Once the giveaway ends, winners are selected and announced.",
  },
];

const HowToParticipate = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>SIMPLE & TRANSPARENT</span>

            <h2>How to Participate</h2>

            <p>
              Enter giveaways in just a few simple steps and get a chance to win
              exciting rewards.
            </p>
          </div>

          <div className={styles.headerBadge}>
            <Trophy size={18} />
            <span>5 Easy Steps</span>
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.number}>
                <div className={styles.step}>
                  <div className={styles.iconWrapper}>
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <span className={styles.number}>{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.connector}>
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className={styles.bottom}>
          <span>Complete more activities to increase your rewards.</span>

          <button>
            Start Earning
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
