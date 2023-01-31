'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText, TypingText} from "../components";
import { staggerContainer, fadeIn} from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
    >
      <TypingText title="| Poeple on the World" textStyles="text-center"/>
      <TitleText textStyles="text-center" title={<>Track friends around you and invite them to play together in the same world</>} />
      <motion.div
        className="relative mt-[68px] flex w-full h-[550px]"
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people1" className="w-full h-full"/>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people2" className="w-full h-full"/>
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people3" className="w-full h-full"/>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
