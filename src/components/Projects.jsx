import React from "react";
import Barber from "../assets/Barber.png";
import Quiz from "../assets/Quiz.png";
import hairline from "../assets/hairline.png";
import ecommerce from "../assets/ecommerce.png";
import Miracle from "../assets/Miracle.png";
import Notes from "../assets/Notes.png";

const projects = [
  {
    id: 1,
    image: hairline,
    title: "Hairline",
    description: "Salon booking and discovery app",
    link: "https://hairline-showcase.vercel.app/",
    github: "https://github.com/Emanyouel/Hairline-showcase",
  },
  {
    id: 2,
    image: Miracle,
    title: "Miracle",
    description: "A simple Barber booking demo app",
    link: "https://miracle-khaki.vercel.app/",
    github: "https://github.com/Emanyouel/Miracle",
  },
  {
    id: 3,
    image: Notes,
    title: "Notes",
    description: "A simple notes app",
    link: "https://personal-notes-rouge.vercel.app",
    github: "https://github.com/Emanyouel/Personal-Notes",
  },
  {
    id: 4,
    image: Barber,
    title: "BarberSa",
    description: "Local Barber Shop Website",
    link: "https://emanyouel.github.io/BArberSaMAR/",
    github: "https://github.com/Emanyouel/BArberSaMAR",
  },
  {
    id: 5,
    image: ecommerce,
    title: "Ecommerce demo-project",
    description: "This is the third project.",
    link: "https://ecommerce-group-website.vercel.app/",
    github: "https://github.com/Emanyouel/Ecommerce-group-website",
  },
  {
    id: 6,
    image: Quiz,
    title: "Quiz-Game",
    description: "This is a short quiz game with some ",
    link: "https://group2quizgame.netlify.app/",
    github: "https://github.com/KaegenGov1998/Quiz-Game",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-20 bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Projects
          </h2>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            A selection of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, image, title, description, link, github }) => (
            <div
              key={id}
              className="shadow-xl rounded-lg p-6 hover:shadow-xl/20 transition"
            >
              <div className="h-48 mb-4 bg-gray-200 flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover rounded-md"
                  />
                ) : (
                  <span className="text-gray-500">Image Placeholder</span>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {title}
              </h3>
              <p className="text-gray-700 mb-4">{description}</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={link}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 transition"
                >
                  View Project
                </a>
                <a
                  href={github}
                  className="text-sky-600 text-sm hover:underline"
                >
                  Open Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
