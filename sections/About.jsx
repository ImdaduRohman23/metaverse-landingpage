'use client';
import { fadeIn, fideIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{
        once: true,
        amount: 0.25
      }}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        variants={fadeIn('up', 'tween', 0.2, 1)}
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future, 
        where you can enjoy the virtual world by feeling like it's really real, 
        you can feel what you feel in this metaverse world, because this is really the <span className="font-extrabold text-white">madness of the metaverse</span>  of today, 
        using onl <span className="font-extrabold text-white">VR</span> devices you can easily explore the metaverse world you want, 
        turn your dreams into reality. Let's <span className="font-extrabold text-white">explore</span> the madness of the metaverse by scrolling down
      </motion.p>

      <motion.img 
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        variants={fadeIn('up', 'tween', 0.3, 1)}
      />
    </motion.div>
  </section>
);

export default About;
