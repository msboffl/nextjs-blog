import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ url, text }) {
  return (
    <>
      <Link href={url} className={styles.container}>
        {text}
      </Link>
    </>
  );
}
