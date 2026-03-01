import { useState, useEffect } from 'react';
import HeroSection from '../home/HeroSection';
import Footer from '../layout/Footer';
import styles from './HomePage.module.css';

export default function HomePage({ isActive, isSlidingOut }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // On first activation, play animation; subsequent activations show completed
  useEffect(() => {
    if (isActive) {
      if (!hasAnimated) {
        setShouldAnimate(true);
        setHasAnimated(true);
      } else {
        setShouldAnimate(false);
      }
    }
  }, [isActive]);

  const handleResetAnimation = () => {
    setShouldAnimate(false);
    // Small delay to allow reset before restarting
    setTimeout(() => setShouldAnimate(true), 50);
  };

  return (
    <div
      className={[
        styles.page,
        isActive ? styles.active : '',
        isSlidingOut ? styles.slidingOut : '',
      ].join(' ')}
    >
      <div className={styles.container}>
        <HeroSection
          shouldAnimate={shouldAnimate}
          onResetAnimation={handleResetAnimation}
        />
      </div>
      <Footer />
    </div>
  );
}
