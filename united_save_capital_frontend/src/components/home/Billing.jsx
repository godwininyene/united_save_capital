import React from 'react'
import { layout } from '../../style'
import styles from '../../style'
import { apple, google, bill } from '../../assets'
import Button from '../common/Button'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[100%] h-[100%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[100%] h-[100%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Effortlessly manage your billing and invoicing with our seamless and intuitive system.
        Stay organized, track transactions, and process payments with ease,
        all in one secure platform.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /> */}
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
  )
}

export default Billing
