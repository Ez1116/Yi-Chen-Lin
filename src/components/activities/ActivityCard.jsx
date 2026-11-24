import { useReveal } from '../../hooks/useReveal';
import styles from '../publications/PublicationCard.module.css';

export default function ActivityCard({ activity, index = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles.reveal} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className={styles.yearBadge}>{activity.year}</span>
      <div className={styles.content}>
        <p className={styles.title}>
          <em>{activity.title}</em> [{activity.type}]
        </p>
        <p className={styles.citation}>
          {`${activity.event}, ${activity.location}.`}
        </p>
      </div>
    </div>
  );
}
