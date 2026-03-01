import { publications } from '../../data/publications';
import styles from './PublicationCard.module.css';

export default function PublicationCard() {
  return (
    <div className={styles.contentCard}>
      <div className={styles.cardShadow}></div>
      <div className={styles.cardContent}>
        {publications.map((pub) => (
          <div key={pub.id} className={styles.publicationItem}>
            {pub.text} <em>{pub.journal}</em>{pub.journalSuffix}
          </div>
        ))}
      </div>
    </div>
  );
}
