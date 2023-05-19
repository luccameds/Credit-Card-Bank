'use client';

import { motion } from 'framer-motion';
import { navVariants, staggerContainer } from '../utils/motion';
import styles from '../styles';

const Hero = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <div className="mx-[60px] my-[90px] flex flex-row items-center justify-between text-white">
      <div>
        <div className="my-[10px]">
          <h1 className="bg-gradient-to-r from-[#9130F4] to-[#4646F9] bg-clip-text text-[75px] font-extrabold text-transparent">
            Scale Fintech
          </h1>
          <h1 className="text-[75px] font-bold">Seguro e Confiável</h1>
        </div>
        <p className="w-[70%] text-[20px] font-light">
          Envie seus produtos fintech aos seus clientes por meio de{' '}
          <span className="font-extrabold text-white"> processos rápidos </span>{' '}
          e confiáveis.{' '}
          <span className="font-extrabold text-white">Seguros</span> e altamente
          personalizáveis.
        </p>
        <p className="my-[5px] w-[70%] text-[20px] font-light">
          <span className="font-extrabold text-white">Rise Finance</span> é o
          melhor parceiro para você se deseja expandir seus produtos financeiros
          globalmente.
        </p>
        <button
          type="button"
          className="my-[75px] flex h-fit border-spacing-28 items-center gap-[12px] bg-gradient-to-r from-[#9130F4] to-[#4646F9] p-1"
        >
          <div className="bg-[#131170] px-[60px] py-[20px]">
            <span className="text-[16px] font-bold text-white">CONSULTAR </span>
          </div>
        </button>
      </div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        <img src="cards.svg" alt="credit_card" />
      </motion.div>
    </div>
  </motion.div>
);

export default Hero;
