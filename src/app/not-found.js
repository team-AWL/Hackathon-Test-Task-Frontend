import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.number}>4</p>
          <img src="/404.svg" alt="404" className={styles.image} />
          <p className={styles.number}>4</p>
        </div>
        <div>
          <p className={styles.message}>Упс...</p>
        </div>
        <div>
          <p className={styles.subMessage}>Схоже, що сторінку не знайдено</p>
        </div>
      </div>
    </>
  );
}