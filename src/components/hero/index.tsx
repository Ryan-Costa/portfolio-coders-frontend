import { Title } from "../title";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-[85vh] flex items-center bg-bg-hero justify-center overflow-hidden">
        <Title />
        <img
          src="https://iili.io/dKmV8U7.png"
          alt="Hero Ryan"
          className="-mb-10 w-[550px]"
        />
      </div>
    </>
  );
};
