import styles from "./index.module.css";
import Landing from "./components/landing";
import About from "./components/about";
import Team from "./components/team";
import Reason from "./components/reason";
import MuAndCoders from "./components/muAndCoders";
import Criteria from "./components/criteria";
import Faq from "./components/faq";
import Testimonial from "./components/testimonial";
import Partners from "./components/partners";
export const Home = () => {
  return (
    <div className={styles.topCoders}>
      <Landing />
      <About />
      <Team />
      <Reason />
      <MuAndCoders />
      <Criteria />
      <Faq />
      <Testimonial />
      <Partners />
    </div>
  );
};
