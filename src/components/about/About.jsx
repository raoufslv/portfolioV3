import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <h1 className="text-white text-3xl font-bold text-start pt-20">
        {t("titles", { returnObjects: true })[0]}
      </h1>
      <p className="text-white text-lg text-start m-8 mb-0">{t("about")}</p>
    </div>
  );
}
