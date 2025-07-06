import { useLoaderData} from "react-router-dom";
import DetailsCard from "../components/DetailsCard";


const EstateDetailsPage = () => {
  const information= useLoaderData();
  console.log(information);
  

  
  return (
    <div className=" mx-5">
      {
        information.map((info)=><DetailsCard key={info.id} info={info}></DetailsCard>)
      }
    </div>
  );
};

export default EstateDetailsPage;
