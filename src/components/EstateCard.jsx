import { HiCurrencyDollar } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const { id, image, estate_title, segment_name, location, price, Status } =
    estate;

  return (
    <div className="card bg-base-100 p-4 shadow-sm mb-15">
      <figure>
        <img
          className="h-[300px] w-full rounded-lg hover:rounded-lg  object-center hover:scale-105 duration-150 ease-linear transition-all delay-100"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex  items-center justify-between ">
          <h2 className="card-title ">{estate_title}</h2>
          <h2 className="card-title ">{segment_name}</h2>
        </div>

        <div className="flex justify-between mt-3">
          <p className="flex items-center font-bold ">
            <MdLocationOn className="text-2xl mr-1" /> {location}
          </p>
          <p className="flex items-center font-bold ">
            <HiCurrencyDollar className="text-2xl mr-1" />
            {price}
          </p>
        </div>

        <div className="card-actions mt-5 ">
          <Link className="w-full" to={`/estate/${id}`}>
            <button className="btn btn-primary w-ull">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
