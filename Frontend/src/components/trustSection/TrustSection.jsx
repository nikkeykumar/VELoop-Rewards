import React from "react";
import {
  ShieldCheck,
  LockKeyhole,
  BadgeCheck,
  Scale,
  Eye,
  Headphones,
} from "lucide-react";

import styles from "./TrustSection.module.css";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your account and giveaway activity are protected with secure platform practices.",
  },
  {
    icon: Scale,
    title: "Fair Selection",
    description:
      "Winner selection follows the published rules of each giveaway.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "Entry requirements, prize details and important rules are clearly displayed.",
  },
  {
    icon: LockKeyhole,
    title: "Protected Entries",
    description:
      "Your giveaway entry is recorded against your account after successful participation.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Rewards",
    description:
      "Prize and winner information is reviewed before announcement and claim.",
  },
  {
    icon: Headphones,
    title: "Support Available",
    description:
      "Get help if you have questions about participation or prize claims.",
  },
];

const TrustSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHY TRUST VELOOP</span>

          <h2>Built Around Fairness & Transparency</h2>

          <p>
            We keep every giveaway simple, clear and easy to understand so you
            know exactly how participation works.
          </p>
        </div>

        {/* Trust Grid */}
        <div className={styles.grid}>
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.icon}>
                  <Icon size={22} strokeWidth={2} />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerIcon}>
            <ShieldCheck size={25} />
          </div>

          <div className={styles.bannerContent}>
            <h3>Your Participation, Clearly Explained</h3>

            <p>
              Entry fees, eligibility, giveaway duration and winner selection
              information are shown before you join.
            </p>
          </div>

          <div className={styles.secureBadge}>
            <LockKeyhole size={15} />
            Secure & Transparent
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
