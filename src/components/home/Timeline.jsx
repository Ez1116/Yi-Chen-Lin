import { timelineItems } from '../../data/timeline';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

export default function Timeline({ isVisible }) {
  return (
    <div className={`${styles.timelineSection} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.sectionTitle}>Career &amp; Honors</h2>
      <div className={styles.timelineContainer}>
        {timelineItems.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
