import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { currentGiveaway } from "../../data/giveawayData";
import PrizeCard from "../prizeCard/PrizeCard";
import styles from "./FeaturedGiveaways.module.css";

const FeaturedGiveaways = ({ prizes = [] }) => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "next" ? 330 : -330,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>REWARDS YOU CAN WIN</span>

            <h2>Featured Giveaways</h2>

            <p>Explore the rewards available in the current giveaway.</p>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.arrowButton}
              onClick={() => slide("prev")}
              aria-label="Previous rewards"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              className={styles.arrowButton}
              onClick={() => slide("next")}
              aria-label="Next rewards"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className={styles.slider} ref={sliderRef}>
          {currentGiveaway.prizes.map((prize) => (
            <div className={styles.slide} key={prize.id}>
              <PrizeCard prize={prize} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGiveaways;
