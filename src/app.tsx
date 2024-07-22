import { useEffect, useState } from "react";
import { Hero } from "./components/hero";
import Section from "./components/section";
import { Social } from "./components/social";
import { Skills } from "./components/skills";

interface DataProps {
  id: number;
  title: string;
  subtitle: string | null;
  text: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  secondText: string;
  imageUrl: string;
  videoUrl: string | undefined;
  images:
    | {
        url: string;
        description: string | null;
      }[]
    | null;
}
[];
function App() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${import.meta.env.VITE_BASE_URL}/data`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    };
    fetchData();
  }, []);
  return (
    <>
      <Hero />
      <Social />
      {data.map((data: DataProps, index: number) => (
        <Section
          key={data.id}
          title={data.title}
          subtitle={data.subtitle}
          imageUrl={data.imageUrl}
          videoUrl={data.videoUrl}
          text={data.text}
          images={data.images}
          invert={index % 2 !== 0}
          originalAnimation={index % 2 !== 0}
        />
      ))}
      <Skills />
    </>
  );
}

export default App;
