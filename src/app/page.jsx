import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.hero__title}>
            Better design for your digital products.
          </h1>
          <p className={styles.hero__text}>
            Turning your idea into reality. We bring together the teams from the
            team global tech industry{" "}
          </p>
          <Button url={"/portfolio"} text={"See Our Works"} />
        </div>
        <div className={styles.img__container}>
          <Image src={Hero} className={styles.img} alt="Hero" />
        </div>
      </div>
    </>
  );
}
