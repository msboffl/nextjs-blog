import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

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
        <div className={styles.about__textContainer}>
          <div className={styles.item__text}>
            <h1>Who are we?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              culpa voluptatibus officia iure aut! Amet provident tempora, quo
              consectetur animi eum possimus a nulla fugit modi illum similique
              quas incidunt?
            </p>
          </div>
          <div className={styles.item__text}>
            <h1>What we do?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis tenetur vero dignissimos iure aliquid velit mollitia
              explicabo, doloremque magnam eaque fuga nisi quos aut officiis
              veritatis possimus! Laudantium, veniam ut?
            </p>
            <Button url={"/contact"} text={"Contact"} />
          </div>
        </div>
      </div>
    </>
  );
}
