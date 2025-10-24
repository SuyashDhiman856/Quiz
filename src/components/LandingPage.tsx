import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import suyashAvatar from "@/assets/suyash-avatar.png";
import wifeAvatar from "@/assets/wife-avatar.png";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8 sm:mb-12"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4 sm:mb-6"
        >
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-primary fill-primary" />
        </motion.div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3 sm:mb-4 font-serif px-2">
          I Love you so much
          <br />
          My Diya
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-2"
        >
          I made somthing for you My Love 🥹
        </motion.p>
      </motion.div>

      <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-16 mb-8 sm:mb-12 z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src={suyashAvatar}
            alt="Suyash"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full shadow-romantic"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary text-primary-foreground rounded-full p-1.5 sm:p-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src={wifeAvatar}
            alt="My Love"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full shadow-romantic"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-accent text-accent-foreground rounded-full p-1.5 sm:p-2"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Heart className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="z-10"
      >
        <Button
          onClick={onStart}
          size="lg"
          className="text-lg sm:text-xl px-8 py-5 sm:px-12 sm:py-6 rounded-full bg-primary hover:bg-primary/90 shadow-romantic transition-all hover:scale-105"
        >
          Start the Quiz ❤️
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
