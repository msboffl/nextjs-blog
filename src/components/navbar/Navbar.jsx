"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];
export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          Nextjs Blog
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          <button
            className={styles.logout}
            onClick={() => {
              console.log("Logout successfully");
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
