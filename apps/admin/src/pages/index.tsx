import { libHello } from "@snaps/lib";
import { RedButton } from "@snaps/ui";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>admin {libHello()}</p>
        </div>
        <RedButton
          onClick={() => {
            console.log("BlueButton clicked");
          }}
        >
          snaps/ui 버튼
        </RedButton>
      </main>
    </>
  );
}
