import { useState, useEffect, useRef } from 'react';
import TypingText from './TypingText';
import Timeline from './Timeline';
import styles from './HeroSection.module.css';

const RESEARCH_TAGS = [
  'Scientific Inquiry',
  'Systems Thinking',
  'Digital Learning',
  'Marine Ed',
];

export default function HeroSection({ shouldAnimate }) {
  // phase 0: all hidden
  // phase 1: hero header (photo + name + position) visible
  // phase 3: typing started
  // phase 4: bottom section (tags + email) + timeline visible
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
    const t3 = setTimeout(() => setPhase(3), 900);
    timersRef.current = [t1, t3];

    return () => clearTimers();
  }, [shouldAnimate]);

  const handleTypingComplete = () => {
    const t = setTimeout(() => setPhase(4), 600);
    timersRef.current.push(t);
  };

  return (
    <div className={styles.heroSection}>
      <div className={`${styles.heroGrid} ${phase >= 1 ? styles.visible : ''}`}>
        <div className={styles.photoCol}>
          <img
            src="/ez.jpg"
            width="140"
            height="140"
            alt="Yi-Chen Lin"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textCol}>
          <h1 className={styles.name}>Yi-Chen Lin</h1>
          <p className={styles.position}>Ph.D. Candidate in Science Education</p>
          <p className={styles.institution}>National Taiwan Normal University</p>

          {phase >= 3 && (
            <TypingText
              isAnimating={shouldAnimate}
              onComplete={handleTypingComplete}
            />
          )}

          <div className={`${styles.bottomSection} ${phase >= 4 ? styles.visible : ''}`}>
            <p className={styles.researchLabel}>Research Interests</p>
            <div className={styles.tags}>
              {RESEARCH_TAGS.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href="mailto:easy0110111@gmail.com" className={styles.emailLink}>
              easy0110111@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Timeline isVisible={phase >= 4} />
    </div>
  );
}
