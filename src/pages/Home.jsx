import { useLoaderData } from "react-router-dom";
import EstateCard from "../components/EstateCard";
import Slider from "../components/Slider";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Slider></Slider>

      <h1 className=" text-4xl font-bold text-center my-10">Estates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-5">
        {estates.map((estate) => (
          <EstateCard 
          key={estate.id}
           estate={estate}>
           </EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
