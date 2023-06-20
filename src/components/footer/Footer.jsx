import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const social = [
  { id: 1, imgPath: "/1.png", title: "Facebook", url: "Facebook" },
  { id: 2, imgPath: "/2.png", title: "Instagram", url: "Instagram" },
  { id: 3, imgPath: "/3.png", title: "twitter", url: "Twitter" },
  { id: 4, imgPath: "/4.png", title: "YouTube", url: "YouTube" },
];

export default function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div>@2023 Nextjs Blog. All rights reserved</div>
        <div className={styles.social}>
          {social.map((img) => (
            <Link href={img.url} key={img.id}>
              <Image src={img.imgPath} width={20} height={20} alt={img.title} />
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
