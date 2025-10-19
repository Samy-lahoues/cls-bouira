"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { clubs } from "@/constants";

const ClubServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedClub, setSelectedClub] = useState<(typeof clubs)[0] | null>(
    null,
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clubs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clubs.length) % clubs.length);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <section id="clubs" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-primary" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-primary font-display">
              نوادي المركز
            </h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            انضم إلى نوادينا المتنوعة واستمتع بأنشطة مميزة
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative">
            {/* Snap Scroll Container for Mobile */}
            <div
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden h-[500px] rounded-3xl"
              onScroll={handleScroll}
            >
              {clubs.map((club, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center snap-always"
                >
                  <div className="relative h-full">
                    <Image
                      width={500}
                      height={500}
                      src={club.image || "/placeholder.svg"}
                      alt={club.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-3 font-display">
                        {club.name}
                      </h3>
                      <p className="text-base mb-4 leading-relaxed line-clamp-3">
                        {club.description}
                      </p>

                      <button
                        onClick={() => setSelectedClub(club)}
                        className="px-6 py-2.5 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all hover:scale-105 text-sm"
                      >
                        المزيد من التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Carousel with Arrows */}
            <div className="hidden md:block relative h-[600px] overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    <Image
                      width={500}
                      height={500}
                      src={clubs[currentIndex]?.image || "/placeholder.svg"}
                      alt={clubs[currentIndex]?.name || "Club name"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 right-0 left-0 p-12 text-white">
                      <h3 className="text-4xl font-bold mb-4 font-display">
                        {clubs[currentIndex].name}
                      </h3>
                      <p className="text-lg mb-6 leading-relaxed max-w-2xl">
                        {clubs[currentIndex].description}
                      </p>

                      <button
                        onClick={() => setSelectedClub(clubs[currentIndex])}
                        className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all hover:scale-105"
                      >
                        المزيد من التفاصيل
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons - Desktop Only */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
              >
                <ChevronRight className="text-primary" size={24} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="text-primary" size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {clubs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClub(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary font-display">
                  {selectedClub.name}
                </h3>
                <button
                  onClick={() => setSelectedClub(null)}
                  className="p-2 hover:bg-surface-secondary rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <Image
                width={500}
                height={500}
                src={selectedClub.image || "/placeholder.svg"}
                alt={selectedClub.name}
                className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-6"
              />

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">الوصف:</h4>
                  <p className="text-foreground-muted leading-relaxed">
                    {selectedClub.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">الأنشطة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedClub.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">أوقات العمل:</h4>
                  <p className="text-foreground-muted">
                    {selectedClub.schedule}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">للتواصل:</h4>
                  <a
                    href={`tel:${selectedClub.contact}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {selectedClub.contact}
                  </a>
                </div>

                <button className="w-full py-3 sm:py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition-all hover:scale-105 mt-6">
                  سجل الآن
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClubServices;
