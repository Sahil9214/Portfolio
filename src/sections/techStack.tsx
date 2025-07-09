/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TechStackSvg } from "@/icons/techStack";
import { techStack } from "@/utils/constant";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TechStack = () => {
  return (
    <section
      id="skills"
      className=" w-full bg-neutral-950 relative flex flex-col items-center justify-center py-16 md:py-12"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="header flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TechStackSvg />
          <h2 className="text-xl md:text-2xl uppercase leading-none">
            My Stack
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <CategorySection
              key={category}
              category={category}
              items={items}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategorySection = ({
  category,
  items,
  index,
}: {
  category: string;
  items: any[];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="category-section grid grid-cols-1 sm:grid-cols-12 gap-x-10 font-medium"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      custom={index}
    >
      <motion.div className="sm:col-span-5" variants={categoryVariants}>
        <p className="category-title text-3xl   xl:text-5xl font-anton leading-none text-muted-foreground uppercase">
          {category}
        </p>
      </motion.div>

      <div className="sm:col-span-7 flex gap-x-6 mt-4 lg:mt-0 md:gap-x-11 gap-y-8 flex-wrap">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            className="tech-item flex gap-3.5 items-center mt-2 leading-none"
            variants={itemVariants}
            custom={i}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative overflow-hidden rounded-md ">
              <Image
                src={item.logo}
                alt={item.name}
                width={40}
                height={40}
                className="max-h-10 object-contain transition-transform"
              />
            </div>
            <span className="text-xl md:text-2xl capitalize">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
