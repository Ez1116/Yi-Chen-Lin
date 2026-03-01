import { useState, useEffect } from 'react';
import HeroSection from '../home/HeroSection';
import Footer from '../layout/Footer';
import styles from './HomePage.module.css';

export default function HomePage({ isActive, isSlidingOut }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

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

  return (
    <div
      className={[
        styles.page,
        isActive ? styles.active : '',
        isSlidingOut ? styles.slidingOut : '',
      ].join(' ')}
    >
      <div className={styles.container}>
        <HeroSection shouldAnimate={shouldAnimate} />
      </div>
      <Footer />
    </div>
  );
}
