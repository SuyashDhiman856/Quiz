import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import QuizSection from "@/components/QuizSection";
import TransitionScreen from "@/components/TransitionScreen";
import LoveLetterPage from "@/components/LoveLetterPage";
import FloatingHearts from "@/components/FloatingHearts";

type Screen = "landing" | "quiz" | "transition" | "letter";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {currentScreen === "landing" && (
          <LandingPage onStart={() => setCurrentScreen("quiz")} />
        )}
        {currentScreen === "quiz" && (
          <QuizSection onComplete={() => setCurrentScreen("transition")} />
        )}
        {currentScreen === "transition" && (
          <TransitionScreen onComplete={() => setCurrentScreen("letter")} />
        )}
        {currentScreen === "letter" && <LoveLetterPage />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
