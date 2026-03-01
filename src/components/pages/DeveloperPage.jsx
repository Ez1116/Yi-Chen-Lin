import { useEffect } from 'react';
import { projects } from '../../data/projects';
import { useCardFlip } from '../../hooks/useCardFlip';
import ProjectCard from '../developer/ProjectCard';
import Footer from '../layout/Footer';
import styles from './DeveloperPage.module.css';

export default function DeveloperPage({ isActive, isSlidingOut }) {
  const { flippedId, flip, reset } = useCardFlip();

  useEffect(() => {
    if (!isActive) reset();
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-project-card]')) {
        reset();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={[
        styles.page,
        isActive ? styles.active : '',
        isSlidingOut ? styles.slidingOut : '',
      ].join(' ')}
    >
      <div className={styles.projectsContainer}>
        <h1 className={styles.pageTitle}>Resources</h1>
        <p className={styles.pageSubtitle}>Open tools and knowledge resources</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} data-project-card>
              <ProjectCard
                project={project}
                isFlipped={flippedId === project.id}
                onFlip={flip}
                onReset={reset}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
