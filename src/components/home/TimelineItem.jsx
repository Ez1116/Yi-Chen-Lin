import { useReveal } from '../../hooks/useReveal';
import styles from './TimelineItem.module.css';

export default function TimelineItem({ item, index = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${styles.reveal} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.date}>{item.date}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        {item.company && (
          <p className={styles.company}>{item.company.replace('\n', ' ')}</p>
        )}
        <ul className={styles.details}>
          {item.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
