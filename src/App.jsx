import styles from "./style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Portfolio,
  CTA,
  Footer,
  Testimonials,
  Servicios,
  Hero,
  Business2,
} from "./components";
import Carousel from "./components/Carousel";

const App = () => (
  /*   <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={` ${styles.boxWidth}`}>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div> */
  <>
    <Carousel />
    <Hero />
    <Business />
    <Servicios />
    <Business2 />
    <Portfolio />
  </>
);

export default App;
