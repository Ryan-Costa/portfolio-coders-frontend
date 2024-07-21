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
      fetch("http://localhost:3001/skills")
        .then((response) => response.json())
        .then((skills) => setSkills(skills))
        .catch((error) => console.error("Error:", error));
    };
    fetchSkills();
  }, []);

  const getDuplicatedSkills = (skills: SkillProps[]) => {
    return [...skills, ...skills];
  };
  return (
    <section className="max-w-full w-full h-[60vh] flex flex-col items-center justify-between overflow-hidden">
      <h2 className={`text-4xl lg:5xl font-bold`}>Habilidades</h2>

      <div className="max-w-full h-full flex items-center">
        <div className="scroll max-w-full py-10 ">
          <div className="carousel-container translate-x-0 w-content flex gap-10">
            {getDuplicatedSkills(skills).map((skill: SkillProps) => (
              <a
                href={skill.link}
                key={skill.id}
                target="_blank"
                title={skill.description}
              >
                <img
                  src={skill.url}
                  alt={skill.description}
                  className="!w-24 !h-24 whitespace-nowrap carousel-item"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
