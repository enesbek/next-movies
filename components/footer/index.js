import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/enes-bek/" target="_blank">
        Enes Bek
      </Link>
    </footer>
  );
};
