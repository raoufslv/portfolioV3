import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Services() {
  return (
    <>
      <div id="skills" className="pt-32">
        <h1 className="text-white text-4xl font-bold text-start my-8">
          My skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ServicesContent.map((service) => (
            <BackgroundGradient
              key={service.id}
              className="bg-secondary py-5 text-center flex flex-col justify-start gap-4 w-full h-full rounded-2xl cursor-pointer"
            >
              <img
                src={service.icon}
                alt="marketing"
                width={50}
                height={50}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </>
  );
}

import react from "@/assets/icons/react.png";
import node from "@/assets/icons/node.png";
import javascript from "@/assets/icons/javascript.png";
import typescript from "@/assets/icons/typescript.png";
import mongoDB from "@/assets/icons/mongodb.png";
import figma from "@/assets/icons/figma.png";

const ServicesContent = [
  {
    id: 1,
    icon: react,
    title: "React Js",
    description:
      "Nous vous aidons à développer votre présence en ligne et à atteindre vos objectifs commerciaux grâce à des stratégies de marketing numérique sur mesure.",
  },
  {
    id: 2,
    icon: node,
    title: "Node Js",
    description:
      "Nous créons des sites Web et des application qui sont à la fois beaux et fonctionnels. Nous nous assurons que votre site Web ou application est optimisé pour la conversion et qu'il reflète fidèlement votre marque.",
  },
  {
    id: 3,
    icon: javascript,
    title: "Javascript",
    description:
      "Nous créons des designs qui attirent l'attention et qui sont mémorables. Que ce soit pour votre site Web, vos réseaux sociaux ou vos campagnes publicitaires, nous avons ce qu'il vous faut.",
  },
  {
    id: 4,
    icon: typescript,
    title: "Typescript",
    description:
      "Nous créons des modèles 3D réalistes pour vous aider à visualiser vos projets et à donner vie à vos idées.",
  },
  {
    id: 5,
    icon: mongoDB,
    title: "MongoDB",
    description:
      "Nous produisons des vidéos et des animations qui captivent votre public et renforcent votre marque. Que ce soit pour une publicité, une vidéo promotionnelle ou une animation, nous avons ce qu'il vous faut.",
  },
  {
    id: 6,
    icon: figma,
    title: "Figma",
    description:
      "Nous créons des effets visuels époustouflants pour vos films, publicités et vidéos. Nous vous aidons à donner vie à vos idées et à raconter des histoires qui captivent votre public.",
  },
];
