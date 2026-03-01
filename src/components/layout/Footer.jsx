import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <span className={styles.name}>Yi-Chen Lin</span>
        <a href="mailto:easy0110111@gmail.com" className={styles.emailLink}>
          easy0110111@gmail.com
        </a>
        <span className={styles.copyright}>© 2026 Yi-Chen Lin</span>
      </div>
    </footer>
  );
}
