'use client';

import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText, TypingText, InsightCard} from "../components";
import { staggerContainer} from "../utils/motion";
import { insights } from "../constants";


const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight abaout metaverse" textStyles="text-center" />
      <motion.div className="mt-50px flex flex-col gap-[30px]">
        {
          insights.map((insight, index) => (
            <InsightCard 
              key={index}
              {...insight}
              index={index+1}
            />
          ))
        }
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
