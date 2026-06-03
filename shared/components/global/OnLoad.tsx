"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import onLoad from "@/public/onLoad.png";

export const OnLoad = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        initial={{
          scale: 0.3,
          opacity: 0,
          rotate: -20,
        }}
        animate={{
          scale: [0.3, 1, 1.3],
          opacity: [0, 1, 1],
          rotate: [-20, 0, 0],
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}>
        <Image src={onLoad} alt="PayPilot" width={240} height={140} priority />
      </motion.div>
    </div>
  );
};

export default OnLoad;