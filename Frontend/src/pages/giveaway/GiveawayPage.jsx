import GiveawayHero from "../../components/giveawayHero/GiveawayHero";
import FeaturedGiveaways from "../../components/featuredGiveaways/FeaturedGiveaways";
import FAQ from "../../components/FAQ/FAQ.jsx";

import styles from "./GiveawayPage.module.css";

import { currentGiveaway } from "../../data/giveawayData";
import HowToParticipate from "../../components/HowToParticipate/HowToParticipate.jsx";
import WinnerSlider from "../../components/winnerSlider/WinnerSlider.jsx";
import WinnersTabs from "../../components/winnersTabs/WinnersTabs.jsx";
import TrustSection from "../../components/TrustSection/TrustSection.jsx";
import GiveawayRules from "../../components/giveawayRules/GiveawayRules.jsx";

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
