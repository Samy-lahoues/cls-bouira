"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Bot, Plus, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "مركز الترفيه العلمي - حيث يلتقي العلم بالمتعة";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    document.getElementById("clubs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden gradient-hero pt-20 md:pt-22 pb-4 sm:pb-6 md:pb-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 text-primary/10"
        >
          <Bot size={120} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 text-secondary/10"
        >
          <Plus size={100} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-32 text-accent/10"
        >
          <Lightbulb size={110} />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              right: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-display mb-2 space-y-4">
              <p> مركز الترفيه العلمي</p>
              <p> سيدهم جعفر -البويرة-</p>
            </h1>
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground-muted font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </motion.div>

          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto mt-7 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-accent" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display">
                مرحباً بكم
              </h2>
              <Sparkles className="text-accent" size={24} />
            </div>

            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              اكتشف عالماً من المرح والتعلم في مركزنا للترفيه العلمي. انضم إلى
              نوادينا المتنوعة، شارك في الأنشطة التفاعلية، واستمتع بتجربة
              تعليمية فريدة تجمع بين العلم والترفيه.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScsoycOgcJVuutKLH68j8Ncpz__ChKgT0ZSrQSUseYw9OZFdA/viewform?usp=dialog"
                className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">التسجيل الآن</span>
                <motion.div
                  className="absolute inset-0 bg-primary-hover"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>

              <button
                onClick={scrollToContent}
                className="px-8 py-4 bg-white/50 text-primary rounded-full font-bold text-lg border-2 border-primary hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                اكتشف المزيد
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-primary hover:text-primary-hover transition-colors pt-5"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};
export default Hero;
