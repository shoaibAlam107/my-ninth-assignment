import { useLoaderData } from "react-router-dom";
import AllBrands from "../AllBrands/AllBrands";

const Brands = () => {
  const data = useLoaderData();
  return (
    <div className="w-3/4 mx-auto">
        <h1 className="font-bold text-2xl text-orange-500">All Brands :</h1>
      <div>
        {data.map((brands) => (
          <AllBrands key={brands._id} brands={brands}></AllBrands>
        ))}
      </div>
    </div>
  );
};

export default Brands;
