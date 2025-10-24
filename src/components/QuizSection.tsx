import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { questions } from "@/data/quizData";
import SuyashAvatar from "@/assets/suyash-avatar.png";
import DiyaAvatar from "@/assets/wife-avatar.png";
import { Heart, Sparkles } from "lucide-react";

interface QuizSectionProps {
  onComplete: () => void;
}

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowReaction(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      setShowReaction(false);
      setSelectedAnswer(null);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setTimeout(() => onComplete(), 1000);
      }
    }, 3000);
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360,
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: "linear",
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 sm:mb-8 z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse-soft" />
          <p className="text-base sm:text-lg text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse-soft" />
        </div>
        <div className="h-2 w-48 sm:w-64 bg-muted rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 mb-6 sm:mb-8 z-10">
        <motion.img
          src={SuyashAvatar}
          alt="Suyash"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full shadow-romantic"
          animate={
            showReaction
              ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }
              : { y: [0, -8, 0] }
          }
          transition={{ duration: showReaction ? 0.5 : 2, repeat: showReaction ? 0 : Infinity }}
        />
        <motion.img
          src={DiyaAvatar}
          alt="My Love"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full shadow-romantic"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="max-w-2xl w-full bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-romantic z-10"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground">
          {question.question}
        </h2>

        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              variant="outline"
              size="sm"
              className={`text-base sm:text-lg py-5 sm:py-6 rounded-xl sm:rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-soft ${
                selectedAnswer === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/50 hover:bg-secondary border-border"
              }`}
            >
              {option}
            </Button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showReaction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-4 sm:bottom-8  -translate-x-1/2 max-w-md w-full mx-4 z-50"
          >
            <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-romantic border-2 border-primary">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={SuyashAvatar}
                  alt="Suyash"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                />
                <p className="text-base sm:text-lg text-foreground font-medium">
                  {question.reaction}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizSection;
