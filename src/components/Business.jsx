import styles from "../style";

const Business = () => (
  <section
    id="features"
    className="relative bg-white h-72 flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h2 className={styles.heading2} style={{ color: "#131e29" }}>
          Somos profesionales al servicio de profesionales
        </h2>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-full"></div>
    </div>
  </section>
);

export default Business;
