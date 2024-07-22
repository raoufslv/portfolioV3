import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Services() {
  return (
    <>
      <div id="skills" className="pt-32">
        <h1 className="text-white text-4xl font-bold text-start my-8">
          My skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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
import express from "@/assets/icons/express.png";
import git from "@/assets/icons/git.png";
import mysql from "@/assets/icons/mysql.png";
import python from "@/assets/icons/python.png";
import console from "@/assets/icons/console.png";

const ServicesContent = [
  {
    id: 1,
    icon: react,
    title: "React Js",
  },
  {
    id: 2,
    icon: node,
    title: "Node Js",
  },
  {
    id: 7,
    icon: express,
    title: "Express Js",
  },
  {
    id: 3,
    icon: javascript,
    title: "Javascript",
  },
  {
    id: 4,
    icon: typescript,
    title: "Typescript",
  },
  {
    id: 5,
    icon: mongoDB,
    title: "MongoDB",
  },
  {
    id: 8,
    icon: mysql,
    title: "Mysql",
  },
  {
    id: 9,
    icon: python,
    title: "Python",
  },
  {
    id: 10,
    icon: git,
    title: "Git",
  },
  {
    id: 11,
    icon: console,
    title: "Linux console",
  },
  {
    id: 6,
    icon: figma,
    title: "Figma",
  },
];
