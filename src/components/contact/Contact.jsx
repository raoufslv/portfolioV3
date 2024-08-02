import phone from "@/assets/phone.png";
import email from "@/assets/email.png";
import Info from "./Info";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="my-36">
      <h1 className="text-white text-4xl font-bold text-start my-8 mb-16">
        {t("titles", { returnObjects: true })[4]}
      </h1>
      <div className="flex justify-between md:items-start gap-10 items-center md:flex-row flex-col">
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-2xl ">Contact</h2>
          <Info icon={email} email="abderraouf.abdallah1812@gmail.com" />
          <Info icon={phone} text="+2135 40 60 87 26" />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
