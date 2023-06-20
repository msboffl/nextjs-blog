import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Lets Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.img__container}>
            <Image src={"/contact.png"} fill={true} className={styles.img} alt="contact" />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="email" placeholder="email" className={styles.input} />
            <textarea
              cols="30"
              rows="10"
              placeholder="message"
              className={styles.textarea}
            ></textarea>
            <Button url={"#"} text={"Send"} />
          </form>
        </div>
      </div>
    </>
  );
}
