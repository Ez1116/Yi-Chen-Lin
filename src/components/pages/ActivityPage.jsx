import { activities } from '../../data/activities';
import ActivityCard from '../activities/ActivityCard';
import Footer from '../layout/Footer';
import styles from './PublicationsPage.module.css';

export default function ActivityPage({ isActive, isSlidingOut }) {
  return (
    <div
      className={[
        styles.page,
        isActive ? styles.active : '',
        isSlidingOut ? styles.slidingOut : '',
      ].join(' ')}
    >
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Activity</h1>
        <p className={styles.pageSubtitle}>
          Conference presentations and invited talks
        </p>
        {activities.map((activity, index) => (
          <ActivityCard key={activity.id} activity={activity} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
