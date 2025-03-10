import React, { FC } from "react";
import Image from "next/image";
import styles from "./Preloader.module.css";
import { IMG_URL } from "@/config/constans";


export const Preloader: FC = () => {
  return (
    <div className={styles.preloader}>
      <Image
        className={styles.loader}
        src={`${IMG_URL}/images/Preloader.webp`}
        alt="Loading..."
        width={100}
        height={100}
        priority
      />
    </div>
  );
};
