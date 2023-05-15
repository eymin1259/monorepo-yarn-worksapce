import { libHello } from "@snaps/lib";
import { BlueButton } from "@snaps/ui";
import { Inter } from "next/font/google";
import { useCallback } from "react";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onClickBlueBtn = useCallback(() => {
    console.log("BlueButton clicked");
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>editor {libHello()}</p>
        </div>
        <BlueButton onClick={onClickBlueBtn}>버튼1</BlueButton>
        <BlueButton onClick={onClickBlueBtn}>버튼2</BlueButton>
      </main>
    </>
  );
}
