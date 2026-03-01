import styles from './TimelineItem.module.css';

export default function TimelineItem({ item }) {
  return (
    <div className={styles.timelineItem}>
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
