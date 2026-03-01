import styles from './CornerDecoration.module.css';

export default function CornerDecoration() {
  return (
    <div className={styles.cornerDecoration}>
      <img
        src="/pixel-art.jpg"
        alt="Pixel Art Decoration"
        className={styles.cornerPixelArt}
      />
    </div>
  );
}
