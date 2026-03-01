import styles from './PublicationCard.module.css';

export default function PublicationCard({ pub }) {
  return (
    <div className={styles.card}>
      <span className={styles.yearBadge}>{pub.year}</span>
      <div className={styles.content}>
        <p className={styles.authors}>{pub.authors}</p>
        <p className={styles.title}>{pub.title}</p>
        <p className={styles.citation}>
          <em className={styles.journal}>{pub.journal}</em>
          {`, ${pub.volume}(${pub.issue}), ${pub.pages}.`}
        </p>
        <a
          href={`https://doi.org/${pub.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.doiLink}
        >
          DOI: {pub.doi}
        </a>
      </div>
    </div>
  );
}
