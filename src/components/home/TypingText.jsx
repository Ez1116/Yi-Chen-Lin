import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import styles from './TypingText.module.css';

const FULL_TEXT =
  "Science education researcher from Taiwan. I'm interested in scientific inquiry, systems thinking, and digital learning.";

export default function TypingText({ isAnimating, onComplete }) {
  const displayText = useTypingAnimation(FULL_TEXT, isAnimating, onComplete);

  return (
    <div className={styles.typingContainer}>
      <div className={styles.mainText}>{displayText}</div>
    </div>
  );
}
