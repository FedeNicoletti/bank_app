import styles from "../style";

const Business2 = () => (
  <section
    id="features"
    className="relative bg-white h-72 flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <h2 className={styles.heading2} style={{ color: "#131e29" }}>
          Estamos preparados para lo que su empresa necesite
        </h2>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-full w-full"></div>
    </div>
  </section>
);

export default Business2;
