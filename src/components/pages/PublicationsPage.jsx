import PublicationCard from '../publications/PublicationCard';
import Footer from '../layout/Footer';
import styles from './PublicationsPage.module.css';

export default function PublicationsPage({ isActive, isSlidingOut }) {
  return (
    <div
      className={[
        styles.page,
        isActive ? styles.active : '',
        isSlidingOut ? styles.slidingOut : '',
      ].join(' ')}
    >
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>PUBLICATIONS</h1>
        <PublicationCard />
      </div>
      <Footer />
    </div>
  );
}
