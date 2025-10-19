"use client";

import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-12 text-center max-w-md w-full"
            >
                {/* Animated Logo/Icon */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1a4d2e] to-[#7fb069] flex items-center justify-center"
                >
                    <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </motion.div>

                {/* Loading Text */}
                <h2 className="text-2xl font-bold text-[#1a4d2e] mb-3 font-display">
                    جاري التحميل...
                </h2>
                <p className="text-[#6b6b6b] mb-6">
                    يرجى الانتظار بينما نقوم بتحميل المحتوى
                </p>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 bg-[#f5f3ef] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#1a4d2e] via-[#7fb069] to-[#d4a574]"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-[#7fb069]"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
export default Loading;
