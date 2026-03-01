import { useApp } from '../../context/AppContext';
import styles from './NavBar.module.css';

export default function NavBar() {
  const { currentPage, navigateTo } = useApp();

  return (
    <header className={styles.header}>
      <nav className={styles.navBar} aria-label="Main navigation">
        <button
          className={styles.wordmark}
          onClick={() => navigateTo('home')}
          aria-label="Go to home page"
        >
          YC Lin
        </button>
        <div className={styles.navLinks}>
          <button
            className={`${styles.navBtn} ${currentPage === 'home' ? styles.active : ''}`}
            onClick={() => navigateTo('home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          <button
            className={`${styles.navBtn} ${currentPage === 'publications' ? styles.active : ''}`}
            onClick={() => navigateTo('publications')}
            aria-current={currentPage === 'publications' ? 'page' : undefined}
          >
            Publications
          </button>
          <button
            className={`${styles.navBtn} ${currentPage === 'developer' ? styles.active : ''}`}
            onClick={() => navigateTo('developer')}
            aria-current={currentPage === 'developer' ? 'page' : undefined}
          >
            Resources
          </button>
        </div>
      </nav>
    </header>
  );
}
