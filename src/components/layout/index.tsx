import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";
import styles from "./index.module.css"

export const Layout = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
