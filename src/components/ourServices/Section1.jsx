import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
  const [checked, setChecked] = useState(0);
  return (
    <div className=" mb-20 flex items-center justify-center bg-[url('/contactpage/background.svg')] bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-contain xl:bg-cover">
       <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Image className="mt-20" width={918} height={426} alt="img" src="/ourServices/ufos.svg" />
    </motion.div>
    </div>
  );
}
