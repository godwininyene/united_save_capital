import styles from "../../style";
import Button from "../common/Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex-1 flex flex-col" data-aos="fade-right" data-aos-duration="1000">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Button />
      </div>
    </section>
  );
};

export default CTA;
