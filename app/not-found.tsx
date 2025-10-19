"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl w-full"
            >
                {/* Glass Card Container */}
                <div className="glass rounded-3xl p-12 mb-8">
                    {/* 404 Number with Animation */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6"
                    >
                        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#1a4d2e] via-[#7fb069] to-[#d4a574] font-display">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-[#1a4d2e] mb-4 font-display">
                            الصفحة غير موجودة
                        </h2>
                        <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed">
                            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
                            إلى موقع آخر. يرجى التحقق من الرابط أو العودة إلى
                            الصفحة الرئيسية.
                        </p>
                    </motion.div>

                    {/* Decorative Icon */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] flex items-center justify-center">
                            <Search className="w-16 h-16 text-[#1a4d2e]" />
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#1a4d2e] text-white rounded-xl font-semibold hover:bg-[#0f3d1f] transition-all shadow-lg hover:shadow-xl"
                            >
                                <Home className="w-5 h-5" />
                                <span>العودة للرئيسية</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link href="/register">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a4d2e] rounded-xl font-semibold border-2 border-[#1a4d2e] hover:bg-[#f5f3ef] transition-all"
                            >
                                <span>التسجيل في النادي</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Helpful Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="glass rounded-2xl p-6"
                >
                    <h3 className="text-lg font-semibold text-[#1a4d2e] mb-4 font-display">
                        روابط مفيدة
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: "الرئيسية", href: "/" },
                            { label: "التسجيل", href: "/register" },
                            { label: "الأنشطة", href: "/#clubs" },
                            { label: "اتصل بنا", href: "/#contact" },
                        ].map((link, index) => (
                            <Link key={index} href={link.href}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="p-3 rounded-lg bg-white hover:bg-[#e8f5e9] transition-colors border border-[#f0f0f0] hover:border-[#7fb069]"
                                >
                                    <span className="text-[#1a4d2e] font-medium">
                                        {link.label}
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
export default NotFound;
