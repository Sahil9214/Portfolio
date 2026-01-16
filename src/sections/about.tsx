"use client";

import CircularText from "@/components/ui/circuluartext";
import { ScrollAnimation } from "@/components/ui/scroll-animations";
import { NAME } from "@/utils/constant";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="w-full  bg-neutral-950 relative flex flex-col items-center justify-center py-16 md:py-12"
      id="about"
    >
      <div className="max-w-[1280px] w-full  mx-auto px-4 md:px-0 relative z-10">
        <ScrollAnimation
          animation="fadeUp"
          className="mb-16 md:mb-10  md:ml-auto md:mr-0"
          duration={0.6}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <CircularText
              text={t("about.title")}
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
            <h2 className="text-3xl  md:text-4xl lg:text-5xl text-neutral-200 font-anton leading-tight w-full">
              {t("about.description")}
            </h2>
          </div>
        </ScrollAnimation>

        {/* "This is me" with line */}
        <ScrollAnimation
          animation="fadeIn"
          className="mb-10"
          duration={0.6}
          delay={0.2}
        >
          <p className="text-neutral-500 mb-3">{t("about.thisIsMe")}</p>
          <div className="h-px bg-neutral-800 w-full"></div>
        </ScrollAnimation>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Name heading */}
          <ScrollAnimation animation="fadeLeft" duration={0.6} delay={0.3}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-neutral-200 font-medium mb-6">
              {t("about.greeting", { name: NAME })}
            </h3>
          </ScrollAnimation>

          {/* Description paragraphs */}
          <ScrollAnimation
            animation="fadeRight"
            className="space-y-6"
            duration={0.6}
            delay={0.4}
          >
            <p className="text-neutral-400 leading-relaxed">
              {t("about.paragraph1")}
            </p>

            <p className="text-neutral-400 leading-relaxed">
              {t("about.paragraph2")}
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Background particles/dots effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 7}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
