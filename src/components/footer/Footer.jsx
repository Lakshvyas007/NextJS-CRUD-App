import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/5.png"
          width={15}
          height={15}
          className={styles.logo}
          alt="Deorwine_Infotech"
        />
        ©2023 NextJS_Infotech. All rights reserved.
      </div>

      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Deorwine_Infotech"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Deorwine_Infotech"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Deorwine_Infotech"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Deorwine_Infotech"
        />
      </div>
    </div>
  );
};

export default Footer;
