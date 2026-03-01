import { useApp } from '../../context/AppContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { navigateTo } = useApp();

  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <button
            className={styles.footerLink}
            onClick={() => navigateTo('developer')}
          >
            Developer
          </button>
        </div>
        <div className={styles.copyright}>© Yi-Chen Lin 2025</div>
      </div>
    </div>
  );
}
