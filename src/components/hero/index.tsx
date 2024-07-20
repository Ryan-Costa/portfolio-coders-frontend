import { Title } from "../title";

export const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[100vh] xl:h-[85vh] flex flex-col xl:flex-row items-center bg-bg-hero justify-center overflow-hidden">
        <Title />
        <img
          src="https://iili.io/dKmV8U7.png"
          alt="Hero Ryan"
          className="absolute bottom-0 w-[650px]"
        />
      </div>
    </>
  );
};
