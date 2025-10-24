import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect } from "react";

interface TransitionScreenProps {
  onComplete: () => void;
}

const TransitionScreen = ({ onComplete }: TransitionScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-2xl px-4"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity }
          }}
          className="inline-block mb-6 sm:mb-8"
        >
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary fill-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-serif"
        >
          This was just to make you laugh ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8"
        >
          Because your smile is my favorite thing in the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent animate-pulse-soft" />
          <p className="text-base sm:text-xl text-muted-foreground">
            Now, let me tell you something real...
          </p>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent animate-pulse-soft" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-8 h-8 text-primary/30 fill-current" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TransitionScreen;
