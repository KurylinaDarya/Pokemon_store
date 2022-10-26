import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Welcome to Pages!!!</h2>
        <h1 className={styles.title}>Get Pokemon Today!</h1>
      </div>
    </div>
  );
};

export default Home;
