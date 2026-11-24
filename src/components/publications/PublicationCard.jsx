import { useReveal } from '../../hooks/useReveal';
import styles from './PublicationCard.module.css';

// Matches the site owner's name in either form: "Lin, Y. C." or "Lin, Y.-C."
const OWNER_NAME = /(Lin, Y\.[ -]?C\.)/;

function highlightOwner(authors) {
  return authors.split(OWNER_NAME).map((part, i) =>
    OWNER_NAME.test(part) ? (
      <mark key={i} className={styles.ownerName}>{part}</mark>
    ) : (
      part
    )
  );
}

export default function PublicationCard({ pub, index = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles.reveal} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className={styles.yearBadge}>{pub.year}</span>
      <div className={styles.content}>
        <p className={styles.authors}>{highlightOwner(pub.authors)}</p>
        <p className={styles.title}>{pub.title}</p>
        <p className={styles.citation}>
          <em className={styles.journal}>{pub.journal}</em>
          {', '}
          <em>{pub.volume}</em>
          {`(${pub.issue}), ${pub.pages}.`}
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
