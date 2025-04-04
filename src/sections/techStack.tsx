"use client";
import { TechStackSvg } from "@/icons/techStack";
import { techStack } from "@/utils/constant";
import Image from "next/image";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="min-h-screen  w-full bg-neutral-950 relative flex flex-col items-center justify-center py-16 md:py-12 "
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="header flex items-center gap-4 mb-10">
          <TechStackSvg />
          <h2 className="text-xl md:text-2xl uppercase leading-none">
            My Stack
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {Object.entries(techStack).map(([category, items]) => (
            <div
              key={category}
              className="category-section grid grid-cols-1 sm:grid-cols-12 gap-x-10 font-medium "
            >
              <div className="sm:col-span-5">
                <p
                  className="category-title  text-5xl font-anton leading-none text-muted-foreground uppercase"
                  style={{
                    transform: "translate3d(0px, 1.0758px,0px)",
                    opacity: 0.9731,
                  }} // Final state
                >
                  {category}
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-6 mt-4 lg:mt-0 md:gap-x-11 gap-y-8 flex-wrap">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="tech-item flex gap-3.5 items-center leading-none"
                  >
                    <div>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="max-h-10"
                      />
                    </div>
                    <span className="text-xl md:text-2xl capitalize">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
