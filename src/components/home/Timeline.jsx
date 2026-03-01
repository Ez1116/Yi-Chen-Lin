import { timelineItems } from '../../data/timeline';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

export default function Timeline({ isVisible }) {
  return (
    <div className={`${styles.timelineSection} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.sectionTitle}>CAREER TIMELINE</h2>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.id} item={item} isEven={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
