import React from "react";
import { Gift, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./GiveawayHero.module.css";
import { currentGiveaway } from "../../data/giveawayData";
import giftImage from "../../assets/ChatGPT Image Aug 19, 2026, 01_40_53 PM (1).png";
import GiveawayStats from "../giveawayStats/GiveawayStats";

const GiveawayHero = () => {
  const navigate = useNavigate();
  const giveaway = currentGiveaway;

  const handleExplore = () => {
    document.getElementById("featured-giveaways")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleJoin = () => {
    const grandPrize = giveaway.prizes?.find(
      (prize) => prize.position === "1st Prize",
    );

    if (grandPrize?.slug) {
      navigate(`/giveaway/${grandPrize.slug}`);
    } else {
      handleExplore();
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.bgGlowOne}></div>
      <div className={styles.bgGlowTwo}></div>
      <div className={styles.bgGlowThree}></div>
      <div className={styles.gridBg}></div>

      {/* Confetti */}
      {/* Confetti */}
      <span className={`${styles.confetti} ${styles.c1}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c2}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c3}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c4}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c5}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c6}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c7}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c8}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c9}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c10}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c11}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c12}`}>◆</span>
      <span className={`${styles.confetti} ${styles.c13}`}>✦</span>
      <span className={`${styles.confetti} ${styles.c14}`}>◆</span>

      {/* Left Gift */}
      <div className={`${styles.giftDecoration} ${styles.leftGift}`}>
        <div className={styles.giftGlow}></div>

        <img src={giftImage} alt="" className={styles.giftImage} />
      </div>

      {/* Right Gift */}
      <div className={`${styles.giftDecoration} ${styles.rightGift}`}>
        <div className={styles.giftGlow}></div>

        <img src={giftImage} alt="" className={styles.giftImage} />
      </div>

      <div className={styles.heroInner}>
        {/* Top Label */}
        <div className={styles.label}>
          <span className={styles.labelIcon}>
            <Gift size={15} />
          </span>

          <span>EXCLUSIVE GIVEAWAYS </span>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <h1>
            Giveaway <span>Section</span>
          </h1>

          <p>
            Join exciting giveaways, complete simple tasks and
            <br className={styles.desktopBreak} />
            win amazing rewards from VELOOP Rewards.
          </p>

          <div className={styles.subText}>
            <Sparkles size={16} />
            <span>More participation, more chances to win!</span>
            <Sparkles size={16} />
          </div>
        </div>
      </div>
      <GiveawayStats giveaway={currentGiveaway} />
    </section>
  );
};

export default GiveawayHero;
