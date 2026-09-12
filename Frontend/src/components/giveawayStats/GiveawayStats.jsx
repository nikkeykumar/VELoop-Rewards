import React from "react";
import { Gift, Users, Trophy, Clock3 } from "lucide-react";

import Countdown from "../countdown/Countdown";
import styles from "./GiveawayStats.module.css";

const GiveawayStats = ({ giveaway }) => {
  const stats = [
    {
      icon: Gift,
      label: "Total Giveaways",
      value: "24",
      suffix: "Active",
    },
    {
      icon: Users,
      label: "Total Participants",
      value: "8.5K+",
      suffix: "Users",
    },
    {
      icon: Trophy,
      label: "Prizes Won",
      value: "1.2K+",
      suffix: "Rewards",
    },
    {
      icon: Clock3,
      label: "Giveaway Ends In",
      value: null,
      suffix: null,
      countdown: true,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div className={styles.statCard} key={index}>
              <div className={styles.topRow}>
                <div className={styles.iconBox}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                {index === 0 && (
                  <span className={styles.liveBadge}>
                    <span />
                    LIVE
                  </span>
                )}
              </div>

              <div className={styles.info}>
                <p>{stat.label}</p>

                {stat.countdown ? (
                  <div className={styles.countdown}>
                    <Countdown giveaway={giveaway} />
                  </div>
                ) : (
                  <div className={styles.valueRow}>
                    <h3>{stat.value}</h3>
                    <span>{stat.suffix}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GiveawayStats;
