import { publications } from '../../data/publications';
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
        <h1 className={styles.pageTitle}>Publications</h1>
        <p className={styles.pageSubtitle}>
          Peer-reviewed research in science and environmental education
        </p>
        {publications.map((pub, index) => (
          <PublicationCard key={pub.id} pub={pub} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
