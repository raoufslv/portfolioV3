/* eslint-disable react/no-unescaped-entities */
import Experience from "./Experience.jsx";
import { useTranslation } from "react-i18next";
import Education from "./Education.jsx";

export default function Resume() {
  const { t } = useTranslation();
  return (
    <div id="resume" className="pt-36">
      <h1 className="text-white text-4xl font-bold text-start my-8">
      {t("titles", { returnObjects: true })[3]}
      </h1>
      <div className="flex gap-20 items-center mt-10 flex-col lg:flex-row">
        <div
          className="lg:self-start lg:mt-5">
          <div className=" flex items-center gap-3">
            <hr className="h-1-2 bg-secondary w-5 border-0" />
            <h4 className="text-2xl navbar-font">Experience</h4>
          </div>
          {t("experience", { returnObjects: true }).map((exp, i) => (
            <Experience
              key={i}
              title={exp.title}
              date={exp.date}
              place={exp.place}
              description={exp.description}
            />
          ))}
        </div>
        <div
          className="lg:self-start lg:mt-5"
        >
          <div className=" flex items-center gap-3">
            <hr className="h-1-2 bg-secondary w-5 border-0" />
            <h4 className="sm:text-2xl text-xl navbar-font">Education</h4>
          </div>
          <div className=" flex flex-col">
          {t("education", { returnObjects: true }).map((exp, i) => (
            <Education
              key={i}
              title={exp.title}
              date={exp.date}
              place={exp.place}
              description={exp.description}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
