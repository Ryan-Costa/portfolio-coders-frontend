import { useEffect, useState } from "react";

interface SkillProps {
  id: number;
  url: string;
  description: string;
  link: string;
}
[];
export function Skills() {
  const [skills, setSkills] = useState<SkillProps[]>([]);

  useEffect(() => {
    const fetchSkills = () => {
      fetch(`${import.meta.env.VITE_BASE_URL}/skills`)
        .then((response) => response.json())
        .then((skills) => setSkills(skills))
        .catch((error) => console.error("Error:", error));
    };
    fetchSkills();
  }, []);

  const getDuplicatedSkills = (skills: SkillProps[]) => {
    return [...skills, ...skills, ...skills, ...skills];
  };
  return (
    <section className="my-12 max-w-full w-full h-[40vh] flex flex-col items-center justify-between overflow-hidden">
      <h2
        className={`text-title-sm lg:text-title-lg xl:text-title-xl font-semibold`}
      >
        Habilidades
      </h2>

      <div className="max-w-full h-full flex items-center">
        <div className="scroll max-w-full py-10 ">
          <div className="carousel-container animate-scroll translate-x-0 w-content flex gap-10">
            {getDuplicatedSkills(skills).map((skill: SkillProps, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                title={skill.description}
                className="hover:scale-125 transition-transform duration-300"
              >
                <img
                  src={skill.url}
                  alt={skill.description}
                  className="whitespace-nowrap carousel-item"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
