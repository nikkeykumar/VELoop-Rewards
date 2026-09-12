import React, { useEffect, useState } from "react";
import { ArrowUpRight, Users, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./PrizeCard.module.css";

const PrizeCard = ({ prize }) => {
  const navigate = useNavigate();

  const calculateTime = () => {
    if (!prize.endDate) return 0;

    const difference = new Date(prize.endDate).getTime() - Date.now();

    return Math.max(0, difference);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    if (!prize.endDate) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [prize.endDate]);

  const formatTime = () => {
    if (timeLeft <= 0) {
      return "ENDED";
    }

    const totalSeconds = Math.floor(timeLeft / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d : ${String(hours).padStart(2, "0")}h : ${String(
      minutes,
    ).padStart(2, "0")}m : ${String(seconds).padStart(2, "0")}s`;
  };

  const handleJoin = () => {
    if (timeLeft <= 0) return;

    navigate(`/giveaway/${prize.slug}`);
  };

  const isEnded = timeLeft <= 0;

  return (
    <article className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageArea}>
        <span className={styles.position}>{prize.position}</span>

        <span className={styles.typeBadge}>
          {prize.type === "GIFT_CARD" ? "GIFT CARD" : "PHYSICAL"}
        </span>

        <img src={prize.image} alt={prize.name} loading="lazy" />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <span className={styles.prizeLabel}>
          {prize.position === "1st Prize" ? "GRAND PRIZE" : "GIVEAWAY REWARD"}
        </span>

        <h3>{prize.name}</h3>

        <p>{prize.description}</p>

        {/* META */}
        <div className={styles.meta}>
          <div>
            <Users size={14} />
            <span>{prize.participants?.toLocaleString()} Participants</span>
          </div>

          <div className={styles.time}>
            <Clock3 size={14} />

            <span className={isEnded ? styles.ended : ""}>{formatTime()}</span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.entry}>
            <span>Entry Fee</span>

            <strong>
              {prize.entry.amount} {prize.entry.currency}
            </strong>
          </div>

          <button
            type="button"
            className={styles.joinButton}
            onClick={handleJoin}
            disabled={isEnded}
            aria-label={
              isEnded
                ? `${prize.name} giveaway ended`
                : `Join ${prize.name} giveaway`
            }
          >
            {isEnded ? "Ended" : "Join Now"}

            {!isEnded && <ArrowUpRight size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PrizeCard;
