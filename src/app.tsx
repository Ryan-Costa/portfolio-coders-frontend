import { useEffect, useState } from "react";
import { Hero } from "./components/hero";
import Section from "./components/section";

interface DataProps {
  name: string;
  firstText: string;
  secondText: string;
  imageUrl: string;
  videoUrl: string | undefined;
  images: string[];
}
[];
function App() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/data")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    };
    fetchData();
  }, []);
  return (
    <>
      <Hero />
      {data.map((data: DataProps, index: number) => (
        <Section
          key={data.name}
          name={data.name}
          imageUrl={data.imageUrl}
          videoUrl={data.videoUrl}
          firstText={data.firstText}
          secondText={data.secondText}
          images={data.images}
          invert={index % 2 !== 0}
          originalAnimation={index % 2 !== 0}
        />
      ))}
    </>
  );
}

export default App;
