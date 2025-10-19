"use client";
import Image from "next/image";
import { categories, jobs } from "@/constants";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Filter } from "lucide-react";
import { useState } from "react";

export default function EmploymentSection() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "الكل") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.category === category));
    }
  };

  return (
    <section id="employment" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-primary" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-primary font-display">
              فرص العمل في المركز
            </h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            انضم إلى فريقنا واصنع الفرق في حياة الشباب من خلال التعليم الترفيهي
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          <Filter className="text-primary" size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-foreground hover:bg-surface-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={job.image || "/placeholder.svg"}
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-display">
                  {job.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <MapPin size={16} />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Calendar size={16} />
                    <span className="text-sm">{job.date}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all group-hover:scale-105">
                  تقديم الطلب
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
