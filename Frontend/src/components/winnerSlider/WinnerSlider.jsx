import React, { useEffect, useState } from "react";
import {
  Trophy,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import styles from "./WinnerSlider.module.css";

const winners = [
  {
    id: "VE10025",
    prize: "Apple Watch",
    location: "Delhi, India",
    date: "Recent Announcement",
  },
  {
    id: "VE20418",
    prize: "AirPods Pro",
    location: "Mumbai, India",
    date: "Recent Announcement",
  },
  {
    id: "VE30972",
    prize: "₹2,000 Amazon Voucher",
    location: "Bengaluru, India",
    date: "Recent Announcement",
  },
];

const WinnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === winners.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? winners.length - 1 : current - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  const winner = winners[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>WINNER ANNOUNCEMENTS</span>

            <h2>Celebrating Our Winners</h2>

            <p>
              See examples of giveaway winner announcements and the rewards they
              received.
            </p>
          </div>

          <div className={styles.demoBadge}>
            <CheckCircle2 size={15} />
            Demo Data
          </div>
        </div>

        {/* Slider */}
        <div className={styles.slider}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={previousSlide}
            aria-label="Previous winner"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.card}>
            <div className={styles.trophy}>
              <Trophy size={30} />
            </div>

            <div className={styles.content}>
              <span className={styles.winnerLabel}>GIVEAWAY WINNER</span>

              <h3>{winner.id}</h3>

              <div className={styles.location}>
                <MapPin size={15} />
                {winner.location}
              </div>

              <div className={styles.divider} />

              <span className={styles.wonLabel}>WON</span>

              <strong className={styles.prize}>{winner.prize}</strong>

              <span className={styles.date}>{winner.date}</span>
            </div>

            <div className={styles.verified}>
              <CheckCircle2 size={16} />
              Verified Entry
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextSlide}
            aria-label="Next winner"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {winners.map((item, index) => (
            <button
              key={item.id}
              className={
                index === activeIndex
                  ? `${styles.dot} ${styles.activeDot}`
                  : styles.dot
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Show winner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinnerSlider;
