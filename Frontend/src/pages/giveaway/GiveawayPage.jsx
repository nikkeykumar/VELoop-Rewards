
import HowToParticipate from "../../components/HowToParticipate/HowToParticipate.jsx";
import WinnerSlider from "../../components/WinnerSlider/WinnerSlider.jsx";
import WinnersTabs from "../../components/WinnersTabs/WinnersTabs.jsx";
import TrustSection from "../../components/TrustSection/TrustSection.jsx";
import GiveawayRules from "../../components/GiveawayRules/GiveawayRules.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";

import styles from "./GiveawayPage.module.css";
import FeaturedGiveaways from "../../components/featuredGiveaways/FeaturedGiveaways";

import { currentGiveaway } from "../../data/giveawayData";
import GiveawayHero from "../../components/giveawayHero/GiveawayHero";

const Giveaway = () => {
  return (
    <main className={styles.page}>
      <GiveawayHero />

      <FeaturedGiveaways prizes={currentGiveaway.prizes} />

      <HowToParticipate />

      <WinnerSlider />

      <WinnersTabs />

      <TrustSection />

      <GiveawayRules />

      <FAQ />

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.ctaLabel}>READY TO WIN?</span>

          <h2>Your next reward could be waiting.</h2>

          <p>Explore exciting giveaways and find your next chance to win.</p>

          <button className={styles.ctaButton}>
            Explore Giveaways
            <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Giveaway;
