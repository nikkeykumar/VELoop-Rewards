import React, { useState } from "react";
import { Trophy, CalendarDays, Gift, MapPin } from "lucide-react";

import styles from "./WinnersTabs.module.css";

const previousWinners = [
  {
    id: "VE10284",
    prize: "iPhone 15 Pro",
    location: "Delhi, India",
    giveaway: "Monsoon Rewards Giveaway",
    date: "Aug 2026",
  },
  {
    id: "VE18462",
    prize: "Apple Watch",
    location: "Pune, India",
    giveaway: "Monsoon Rewards Giveaway",
    date: "Aug 2026",
  },
  {
    id: "VE23891",
    prize: "AirPods Pro",
    location: "Jaipur, India",
    giveaway: "Summer Rewards Giveaway",
    date: "Jul 2026",
  },
  {
    id: "VE31607",
    prize: "₹2,000 Amazon Voucher",
    location: "Mumbai, India",
    giveaway: "Summer Rewards Giveaway",
    date: "Jul 2026",
  },
];

const WinnersTabs = ({ giveawayStatus = "active" }) => {
  const [activeTab, setActiveTab] = useState("current");

  const isActive = giveawayStatus === "active";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>GIVEAWAY WINNERS</span>

            <h2>Meet Our Winners</h2>

            <p>
              Winners are announced after each giveaway ends. Check previous
              giveaways and their rewards.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsWrapper}>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Giveaway winners"
          >
            <button
              className={
                activeTab === "current"
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => setActiveTab("current")}
              role="tab"
              aria-selected={activeTab === "current"}
            >
              <Trophy size={17} />
              Current Winners
            </button>

            <button
              className={
                activeTab === "previous"
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => setActiveTab("previous")}
              role="tab"
              aria-selected={activeTab === "previous"}
            >
              <CalendarDays size={17} />
              Previous Winners
            </button>
          </div>
        </div>

        {/* Current Winners */}
        {activeTab === "current" && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <Trophy size={28} />
            </div>

            {isActive ? (
              <>
                <h3>Winners Will Be Announced Soon</h3>

                <p>
                  This giveaway is currently active. Winners will be revealed
                  after the giveaway ends.
                </p>

                <span className={styles.status}>Giveaway is Active</span>
              </>
            ) : (
              <>
                <h3>Winner Announcement</h3>

                <p>The winner announcement will be available shortly.</p>
              </>
            )}
          </div>
        )}

        {/* Previous Winners */}
        {activeTab === "previous" && (
          <div className={styles.winnerGrid}>
            {previousWinners.map((winner) => (
              <article className={styles.winnerCard} key={winner.id}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>{winner.id.slice(-2)}</div>

                  <div className={styles.userInfo}>
                    <strong>{winner.id}</strong>

                    <span>
                      <MapPin size={13} />
                      {winner.location}
                    </span>
                  </div>

                  <div className={styles.trophySmall}>
                    <Trophy size={17} />
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.prizeInfo}>
                  <span>
                    <Gift size={15} />
                    PRIZE WON
                  </span>

                  <h3>{winner.prize}</h3>
                </div>

                <div className={styles.cardBottom}>
                  <span>{winner.giveaway}</span>
                  <time>{winner.date}</time>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WinnersTabs;
