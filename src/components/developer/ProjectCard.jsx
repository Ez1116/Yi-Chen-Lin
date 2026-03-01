import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, isFlipped, onFlip }) {
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      onFlip(project.id);
    }
  };

  const handleClick = (e) => {
    if (e.target.tagName === 'A') return;
    onFlip(project.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onFlip(project.id);
    }
  };

  return (
    <div
      className={`${styles.projectCard} ${isFlipped ? styles.flipped : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} — click to see more details`}
      aria-pressed={isFlipped}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
    >
      <div className={styles.cardFlip}>
        <div className={styles.cardFront}>
          <div className={styles.cardImageContainer}>
            <img
              src={project.image}
              width="200"
              height="200"
              alt={project.imageAlt}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.cardTextContainer}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.projectDescription}>
            <h3>{project.backTitle}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {project.linkText}
            </a>
          </div>
          <div className={styles.projectStats}>
            {project.stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
