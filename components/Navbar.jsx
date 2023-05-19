'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="relative"
  >
    <div className="flex flex-row justify-between">
      <img src="rise-logo.svg" alt="riselogo" />
      <img src="menu.svg" alt="Menu" />
    </div>
  </motion.div>
);

export default Navbar;
