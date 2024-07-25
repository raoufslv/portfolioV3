/* eslint-disable react/prop-types */
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid.jsx";
import { useState } from "react";

const categories = ["Tous", "Web", "Jeux video", "AI", "others"];

export default function Projects({ setRerender }) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredItems =
    selectedCategory === "Tous"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  return (
    <div id="projects" className="pt-36">
      <h1 className="text-white text-4xl font-bold text-start my-8">
        MY PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center mb-8 gap-8">
        {categories.map((category, idx) =>
          selectedCategory == category ? (
            <button
              key={idx}
              className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {category}
              </span>
            </button>
          ) : (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategory(category);
                setRerender((prev) => !prev);
              }}
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >
              {category}
            </button>
          )
        )}
      </div>
      <BentoGrid className="max-w-7xl mx-auto">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            images={item.images}
            icon={item.icon}
            className={i === 2 || i === 7 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

import SheTalks from "@/assets/images/SheTalks.png";
import SheTalks1 from "@/assets/images/SheTalks pics/homePage.png";
import SheTalks2 from "@/assets/images/SheTalks pics/LoginPage.png";
import SheTalks3 from "@/assets/images/SheTalks pics/posterPage.png";
import SheTalks4 from "@/assets/images/SheTalks pics/SignupPage.png";
import SheTalks5 from "@/assets/images/SheTalks pics/postsPage.png";

import thumpnail from "@/assets/images/thumpnail.png";
import portfolio from "@/assets/images/portfolio pics/portfolio.png";

import AISite from "@/assets/images/AI-Site.png";
import AISite1 from "@/assets/images/AI pics/Home.png";
import AISite3 from "@/assets/images/AI pics/ComputerVision.png";
import AISite4 from "@/assets/images/AI pics/Machinlearning.png";
import AISite5 from "@/assets/images/AI pics/Deeplearning.png";
import AISite6 from "@/assets/images/AI pics/NLP.png";

import CGVortex from "@/assets/images/CGVortex.png";
import CGVortex1 from "@/assets/images/CGVortex pics/www.cgvortex.com_.png";
import CGVortex2 from "@/assets/images/CGVortex pics/www.cgvortex2.com_.png";
import CGVortex3 from "@/assets/images/CGVortex pics/www.cgvortex3.com_.png";

import AladoShop from "@/assets/images/Aladoshop pics/aladoshop.png";
import AladoShop1 from "@/assets/images/Aladoshop pics/home.png";

import EkriEchri from "@/assets/images/Ekri&Echri.png";
import EkriEchri1 from "@/assets/images/EKRI&ECHRI pics/Home.png";
import EkriEchri2 from "@/assets/images/EKRI&ECHRI pics/Annonces.png";
import EkriEchri3 from "@/assets/images/EKRI&ECHRI pics/Annonce.png";
import EkriEchri4 from "@/assets/images/EKRI&ECHRI pics/deposer Annonce.png";
import EkriEchri5 from "@/assets/images/EKRI&ECHRI pics/Modifier Annonce.png";
import EkriEchri6 from "@/assets/images/EKRI&ECHRI pics/Admin.png";
import EkriEchri7 from "@/assets/images/EKRI&ECHRI pics/signIn.png";
import EkriEchri8 from "@/assets/images/EKRI&ECHRI pics/LogIn.png";

import MGV from "@/assets/images/MGV.png";
import MGV1 from "@/assets/images/MGV pics/home-light.png";
import MGV2 from "@/assets/images/MGV pics/home-dark.png";
import MGV3 from "@/assets/images/MGV pics/Intro-light.png";
import MGV4 from "@/assets/images/MGV pics/Intro-dark.png";
import MGV5 from "@/assets/images/MGV pics/Agenda-light.png";
import MGV6 from "@/assets/images/MGV pics/Agenda-dark.png";
import MGV7 from "@/assets/images/MGV pics/Card-light.png";
import MGV8 from "@/assets/images/MGV pics/Card-dark.png";
import MGV9 from "@/assets/images/MGV pics/question-light.png";
import MGV10 from "@/assets/images/MGV pics/question-dark.png";

const items = [
  {
    title: "Transforming Beetle",
    description:
      "A stylized beetle vehicle concept design with a twist, inspired by the classic Volkswagen Beetle.",
    category: "AI",
    header: <img src={CGVortex} className="h-44 object-fit" alt="CGVortex" />,
    images: [CGVortex1, CGVortex2, CGVortex3],
  },
  {
    title: "Facial rig test for a stylized giraffe",
    description:
      "A facial rig test for a stylized giraffe character, exploring the possibilities of facial expressions.",
    category: "Web",
    header: <img src={EkriEchri} className="h-44 object-fit" alt="EkriEchri" />,
    images: [
      EkriEchri1,
      EkriEchri2,
      EkriEchri3,
      EkriEchri4,
      EkriEchri5,
      EkriEchri6,
      EkriEchri7,
      EkriEchri8,
    ],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Jeux video",
    header: <img src={MGV} className="h-[10.6rem] object-fit" alt="raccoon" />,
    images: [MGV1, MGV2, MGV3, MGV4, MGV5, MGV6, MGV7, MGV8, MGV9, MGV10],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Jeux video",
    header: (
      <img src={AladoShop} className="h-[10.6rem] object-fit" alt="AladoShop" />
    ),
    images: [AladoShop1],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Jeux video",
    header: (
      <img src={AISite} className="h-[10.6rem] object-fit" alt="AISite" />
    ),
    images: [AISite, AISite1, AISite3, AISite4, AISite5, AISite6],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Jeux video",
    header: (
      <img src={thumpnail} className="h-[10.6rem] object-fit" alt="thumpnail" />
    ),
    images: [portfolio],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Jeux video",
    header: (
      <img src={SheTalks} className="h-[10.6rem] object-fit" alt="SheTalks" />
    ),
    images: [SheTalks1, SheTalks2, SheTalks3, SheTalks4, SheTalks5],
  },
];
