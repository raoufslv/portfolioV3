import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div id="home" className="">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center font-medium text-transparent text-4xl md:text-8xl pt-32
          bg-clip-text tracking-tight bg-gradient-to-br from-slate-300 to-slate-500"
        >
          {t("welcome")}
          <br />
          <div className="md:text-6xl text-2xl">
            {t("description")}{" "}
            <FlipWords
              words={t("words", { returnObjects: true })}
              className={"text-white"}
              duration={1100}
            />
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
