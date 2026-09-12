import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const Countdown = ({ giveaway, onEnd, compact = false }) => {
  const { startDate, endDate } = giveaway;
  const calculateTime = () => {
    const now = Date.now();
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    // Giveaway abhi start nahi hua
    if (now < start) {
      return {
        status: "upcoming",
        total: start - now,
      };
    }

    // Giveaway end ho gaya
    if (now >= end) {
      return {
        status: "ended",
        total: 0,
      };
    }

    // Giveaway active hai
    return {
      status: "active",
      total: end - now,
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTime();
      setTime(newTime);

      if (newTime.status === "ended") {
        clearInterval(timer);
        onEnd?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate, onEnd]);

  // Calculate display values
  const totalSeconds = Math.floor(time.total / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor((totalSeconds % 86400) / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  // ENDED
  if (time.status === "ended") {
    return <div className={styles.ended}>Giveaway Ended</div>;
  }

  // UPCOMING
  if (time.status === "upcoming") {
    return (
      <span className={styles.compactTimer}>
        <span>Starts In</span>
        <b>:</b>
        <span>{days}d</span>
        <b>:</b>
        <span>{String(hours).padStart(2, "0")}h</span>
        <b>:</b>
        <span>{String(minutes).padStart(2, "0")}m</span>
      </span>
    );
  }

  // COMPACT - ACTIVE
  if (compact) {
    return (
      <span className={styles.compactTimer}>
        <span>{days}d</span>

        <b>:</b>

        <span>{String(hours).padStart(2, "0")}h</span>

        <b>:</b>

        <span>{String(minutes).padStart(2, "0")}m</span>
      </span>
    );
  }

  // NORMAL - ACTIVE
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>ENDS IN</span>

      <div className={styles.timer}>
        <div className={styles.box}>
          <strong>{String(days).padStart(2, "0")}</strong>
          <small>Days</small>
        </div>

        <span className={styles.colon}>:</span>

        <div className={styles.box}>
          <strong>{String(hours).padStart(2, "0")}</strong>
          <small>Hours</small>
        </div>

        <span className={styles.colon}>:</span>

        <div className={styles.box}>
          <strong>{String(minutes).padStart(2, "0")}</strong>
          <small>Min</small>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
