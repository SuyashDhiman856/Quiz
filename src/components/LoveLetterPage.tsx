import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import suyashAvatar from "@/assets/suyash-avatar.png";

const loveLetter = `My Lakshmi Diya,

Where do I even begin? Every word I write feels too small to capture what you mean to me.

From the moment you came into my life, everything changed. You turned ordinary days into extraordinary memories, everything started shining, becoming colourful, life became easy. I am happy finally. I am happy because I know you are with me. Like Goddess Lakshmi has graced my home with her presence. Everything is so peaceful and beautiful because of you Diya. Thanking you for lifetime will not equate what you did for me (also unconsciously). Your presence is so strong, just by thinking of you every negative thought fades away.

I want to stand beside you in every moment. JUST BE WITH YOU EVERYTIME. Ane wala hun hamesha aapke saath rehne 🥹🛐. 

I love you in the quiet moments when it's hard to share anything. I love you in the silly moments which makes you insecure about yourself (Remember You are the MOST PERFECT Girl in the World 🥹🛐). I love you in the tough moments when it's hard to talk. I love you in every single moment, because every moment with you is a moment worth treasuring.

I will never let you cry. But If you cry, I won’t be able to hold back my tears either. You are My Soul, My Heart, I cannot live without you. All the paragraphs and letter can never tell you how much I Love you. I Love you more than anything and anyone Diya.

I promise to love you through every season, to laugh with you through every joke (even the bad ones) 🥹, to support you in every dream, and to cherish you every single day.

You are my today and all of my tomorrows and Beyond.

Forever and always,
— Suyash 💖`;

const LoveLetterPage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < loveLetter.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(loveLetter.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-card rounded-2xl sm:rounded-3xl shadow-romantic p-5 sm:p-8 md:p-12 relative z-10"
      >
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <motion.img
            src={suyashAvatar}
            alt="Suyash"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-soft"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-base sm:prose-lg max-w-none"
        >
          <div className="whitespace-pre-wrap text-foreground font-serif text-base sm:text-lg leading-relaxed">
            {displayedText}
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-1"
              />
            )}
          </div>
        </motion.div>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.sin(i) * 50],
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${(i / 15) * 100}%`,
              bottom: -20,
            }}
          >
            <Heart className="w-6 h-6 text-primary/20 fill-current" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoveLetterPage;
