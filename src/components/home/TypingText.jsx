import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import styles from './TypingText.module.css';

const FULL_TEXT =
  'Science education researcher from Taiwan. I\u2019m interested in scientific inquiry, systems thinking, digital learning, and marine education.';

export default function TypingText({ isAnimating, onComplete }) {
  const displayText = useTypingAnimation(FULL_TEXT, isAnimating, onComplete);

  return (
    <div className={styles.typingContainer}>
      <p className={styles.mainText}>{displayText}</p>
    </div>
  );
}
