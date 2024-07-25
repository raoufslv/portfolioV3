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

import BastionApp from "@/assets/images/BastionApp pics/Capture.jpg";
import BastionApp2 from "@/assets/images/BastionApp pics/Capture2.jpg";

import DeepFakeInterface from "@/assets/images/DeepFakeInterface pics/Figma Design.png";

import ImageAnalogy from "@/assets/images/ImageAnalogy pics/results1.png";
import ImageAnalogy1 from "@/assets/images/ImageAnalogy pics/results2.png";
import ImageAnalogy2 from "@/assets/images/ImageAnalogy pics/results3.png";

import RiverPuzzle from "@/assets/images/RiverPuzzle pics/game_lost.png";
import RiverPuzzle1 from "@/assets/images/RiverPuzzle pics/game_won.png";
import RiverPuzzle2 from "@/assets/images/RiverPuzzle pics/screenshot_text_rendering.png";

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
    title: "CGVortex",
    description:
      "A marketplace for 3D add-ons, built with the MERN stack and tailwind.",
    category: "Web",
    url: "https://www.cgvortex.com/",
    header: <img src={CGVortex} className="h-44 object-fit" alt="CGVortex" />,
    images: [CGVortex1, CGVortex2, CGVortex3],
  },
  {
    title: "Ekri-Echri",
    description:
      "A house rental platform for the Algerian market, built with the HTML, CSS (Bootstrap), and JS and PHP.",
    category: "Web",
    url: "https://ekri-echri.000webhostapp.com/",
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
    title: "MC Got Visuals",
    description:
      "A showcase website for a motion graphics hackathon event, built with Nextjs, tailwind and framer-motion.",
    category: "Web",
    url: "https://mgv.microclub.info/",
    header: <img src={MGV} className="h-[10.6rem] object-fit" alt="raccoon" />,
    images: [MGV1, MGV2, MGV3, MGV4, MGV5, MGV6, MGV7, MGV8, MGV9, MGV10],
  },
  {
    title: "AladoShop",
    description:
      "An e-commerce platform for a local business, with ecwid CMS platform.",
    category: "Web",
    url: "https://alado-shop.company.site/",
    header: (
      <img src={AladoShop} className="h-[10.6rem] object-fit" alt="AladoShop" />
    ),
    images: [AladoShop1],
  },
  {
    title: "AI Site",
    description: "An AI article website, built only with HTML and CSS.",
    category: "Web",
    url: "https://raoufslv.github.io/AI-Article/",
    header: (
      <img src={AISite} className="h-[10.6rem] object-fit" alt="AISite" />
    ),
    images: [AISite, AISite1, AISite3, AISite4, AISite5, AISite6],
  },
  {
    title: "Portfolio",
    description:
      "My old portfolio website, showcasing my work and skills at the time built with React & tailwind.",
    category: "Web",
    url: "https://raouf-abdallah.netlify.app",
    header: (
      <img src={thumpnail} className="h-[10.6rem] object-fit" alt="thumpnail" />
    ),
    images: [portfolio],
  },
  {
    title: "SheTalks",
    description:
      "A Mental health platform for women, built with the MERN stack and tailwind.",
    category: "Web",
    url: "https://github.com/raoufslv/SheTalks-IWD-23",
    header: (
      <img src={SheTalks} className="h-[10.6rem] object-fit" alt="SheTalks" />
    ),
    images: [SheTalks1, SheTalks2, SheTalks3, SheTalks4, SheTalks5],
  },
  {
    title: "Image Analogy Generator",
    description:
      "Using a neural network to generate images based on a given analogy.",
    category: "AI",
    url: "https://github.com/raoufslv/Image-Analogy-sequence-prediction",
    header: (
      <img
        src={ImageAnalogy}
        className="h-[10.6rem] w-full object-cover"
        alt="SheTalks"
      />
    ),
    images: [ImageAnalogy, ImageAnalogy1, ImageAnalogy2],
  },
  {
    title: "River Puzzle Game",
    description:
      "A puzzle game that challenges the player to cross a river with a set of rules, built with OpenGL.",
    category: "Jeux video",
    url: "https://github.com/raoufslv/OpenGL-Project-3D-Game",
    header: (
      <img
        src={RiverPuzzle}
        className="h-[10.6rem]  w-full object-cover"
        alt="SheTalks"
      />
    ),
    images: [RiverPuzzle, RiverPuzzle1, RiverPuzzle2],
  },
  {
    title: "DeepFake Interface",
    description:
      "A user interface for a deepfake software, built with python and tkinter.",
    category: "Jeux video",
    url: "https://github.com/raoufslv/DFL-GUI",
    header: (
      <img
        src={DeepFakeInterface}
        className="h-[10.6rem] w-full object-cover"
        alt="SheTalks"
      />
    ),
    images: [DeepFakeInterface],
  },
  {
    title: "Bastion App",
    description:
      "A mobile app that helps users get a better knowledge of the monuments of the city of Algiers, built with Flutter.",
    category: "others",
    url: "https://github.com/raoufslv/bastionApp",
    header: (
      <img
        src={BastionApp}
        className="h-[10.6rem] w-full object-cover"
        alt="BastionApp"
      />
    ),
    images: [BastionApp, BastionApp2],
  },
];
