import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import styles from './GetInTouchBtn.module.css';

export default function GetInTouchBtn() {
  const isVisible = useScrollVisibility();

  return (
    <a
      href="mailto:easy0110111@gmail.com"
      className={`${styles.btn} ${!isVisible ? styles.hidden : ''}`}
    >
      Mail
    </a>
  );
}
