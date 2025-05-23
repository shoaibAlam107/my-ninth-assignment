import { Link } from "react-router-dom";


const TopBrands = ({ brands }) => {
  return (
    <div>
  <Link to={`/details/${brands._id}`}>
  
  <div className="card card-compact bg-base-100 w-72 h-80 shadow-xl border border-black ">
            <figure>
              <img
                className="w-auto p-2"
                src={brands.brand_logo}
                alt={brands.brand_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand_Name : {brands.brand_name}</h2>
              <p className="font-semibold text-green-500">
                Category: {brands.category}
              </p>
              <p className="">Total_coupon : {brands.coupons.length}</p>
            </div>
          </div>
  </Link>
       
    </div>
  );
};

export default TopBrands;
