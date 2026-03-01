import styles from './TimelineItem.module.css';

export default function TimelineItem({ item, isEven }) {
  return (
    <div className={`${styles.timelineItem} ${isEven ? styles.even : styles.odd}`}>
      <div className={styles.timelineMarker}></div>
      <div className={styles.timelineCard}>
        <div className={styles.cardShadow}></div>
        <div className={styles.cardContent}>
          <div className={styles.workHeader}>
            <h3 className={styles.jobTitle}>{item.title}</h3>
            <span className={styles.date}>{item.date}</span>
          </div>
          {item.company && (
            <div className={styles.company}>{item.company}</div>
          )}
          <ul className={styles.workDetails} style={!item.company ? { marginTop: '20px' } : {}}>
            {item.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
