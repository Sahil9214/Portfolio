"use client";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";

const Experience = () => {
  return (
    <section
      className=" w-full bg-neutral-950 relative flex flex-col items-center justify-center "
      id="experience"
    >
      <TimelineDemo />
    </section>
  );
};

export default Experience;

export function TimelineDemo() {
  const { t } = useTranslation();

  const data = [
    {
      title: t("experience.current.title"),
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-2">
            {t("experience.current.description")}
          </p>
          {/* //hello */}
          <ul className="list-disc list-inside text-neutral-400 text-xs md:text-lg font-anton font-normal mb-4">
            <li className="mt-1">
              <Trans
                i18nKey="experience.current.items.item1"
                components={{
                  strong: <span className="text-white" />,
                }}
              />
            </li>
            <li className="mt-1">{t("experience.current.items.item2")}</li>
            <li className="mt-1">
              <Trans
                i18nKey="experience.current.items.item3"
                components={{
                  strong: <span className="text-white" />,
                }}
              />
            </li>
            <li className="mt-1">
              <Trans
                i18nKey="experience.current.items.item4"
                components={{
                  strong: <span className="text-white" />,
                }}
              />
            </li>
            <li className="mt-1">
              <Trans
                i18nKey="experience.current.items.item5"
                components={{
                  strong: <span className="text-white" />,
                }}
              />
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="https://getprojects.ai"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/getProjects.webp"
                alt="GetProjects.ai Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://engineerbabu.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/engineerbabu.webp"
                alt="Engineerbabu Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t("experience.neuralhq.title"),
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal">
            <Trans
              i18nKey="experience.neuralhq.description"
              components={{
                strong: <span className="text-white" />,
              }}
            />
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal">
            <Trans
              i18nKey="experience.neuralhq.role"
              components={{
                strong: <span className="text-white" />,
              }}
            />
          </p>
          <ul className="list-disc list-inside text-neutral-400 text-xs md:text-lg font-anton font-normal">
            <li className="mt-1">{t("experience.neuralhq.items.item1")}</li>
            <li className="mt-1">{t("experience.neuralhq.items.item2")}</li>
            <li className="mt-1">{t("experience.neuralhq.items.item3")}</li>
            <li className="mt-1">{t("experience.neuralhq.items.item4")}</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="https://www.neuralhq.ai"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/neuralhq.png"
                alt="NeuralHQ Website"
                width={500}
                height={500}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://www.neuralhq.ai/company"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/secondNeuralhq.png"
                alt="NeuralHQ Mobile App"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t("experience.masai.title"),
      content: (
        <div>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            {t("experience.masai.description1")}
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            {t("experience.masai.description2")}
          </p>
          <p className="text-neutral-400 text-lg md:text-lg font-anton font-normal mb-8">
            {t("experience.masai.description3")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.masaischool.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/masaiSchool.png"
                alt="Masai School"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
            <a
              href="https://github.com/sahil9214"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src="/github.png"
                alt="GitHub Projects"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="experience">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
