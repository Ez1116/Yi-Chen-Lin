import { useState, useEffect, useRef } from 'react';
import TypingText from './TypingText';
import Timeline from './Timeline';
import styles from './HeroSection.module.css';

export default function HeroSection({ shouldAnimate, onResetAnimation }) {
  // phase 0: all hidden
  // phase 1: logo visible
  // phase 2: intro + logo visible
  // phase 3: typing started
  // phase 4: timeline visible
  const [phase, setPhase] = useState(shouldAnimate ? 0 : 4);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    if (!shouldAnimate) {
      clearTimers();
      setPhase(4);
      return;
    }

    setPhase(0);
    clearTimers();

    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 1300);
    timersRef.current = [t1, t2, t3];

    return () => clearTimers();
  }, [shouldAnimate]);

  const handleTypingComplete = () => {
    const t = setTimeout(() => setPhase(4), 800);
    timersRef.current.push(t);
  };

  return (
    <div className={styles.heroSection}>
      <div className={`${styles.logoContainer} ${phase >= 1 ? styles.visible : ''}`}>
        <img
          src="/ez.jpg"
          alt="Yi-Chen (EZ) Profile Picture"
          className={styles.profileImage}
        />
        <div className={styles.textLogo} onClick={onResetAnimation}>
          EZ
        </div>
      </div>

      <div className={`${styles.introText} ${phase >= 2 ? styles.visible : ''}`}>
        HI, MY NAME IS YI-CHEN (Ez)
      </div>

      {phase >= 3 && (
        <TypingText
          isAnimating={shouldAnimate}
          onComplete={handleTypingComplete}
        />
      )}

      <Timeline isVisible={phase >= 4} />
    </div>
  );
}
