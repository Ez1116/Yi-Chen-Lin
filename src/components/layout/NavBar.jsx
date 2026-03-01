import { useApp } from '../../context/AppContext';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import styles from './NavBar.module.css';

export default function NavBar() {
  const { currentPage, navigateTo } = useApp();
  const isVisible = useScrollVisibility();

  return (
    <nav className={`${styles.navBar} ${!isVisible ? styles.hidden : ''}`}>
      <button
        className={`${styles.navBtn} ${currentPage === 'home' ? styles.active : ''}`}
        onClick={() => navigateTo('home')}
      >
        Home
      </button>
      <button
        className={`${styles.navBtn} ${currentPage === 'publications' ? styles.active : ''}`}
        onClick={() => navigateTo('publications')}
      >
        Publications
      </button>
    </nav>
  );
}
