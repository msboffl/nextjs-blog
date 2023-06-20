import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about__img}>
          <Image
            src={
              "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill={true}
            alt=""
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1>Digital Sellers</h1>
            <h2>Handcrafting award winning digital experiances</h2>
          </div>
        </div>
        <div className={styles.about__text}></div>
      </div>
    </>
  );
}
