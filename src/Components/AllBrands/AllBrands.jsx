import { Link } from "react-router-dom";

const AllBrands = ({ brands }) => {
  return (
    <div>
      <div className=" mt-10">
        
        <div>
          <div className="card  bg-base-100 shadow-xl md:w-3/4 mx-auto">
            <figure>
              <img className="w-80 " src={brands.brand_logo} alt={brands.brand_name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand_Name: {brands.brand_name}</h2>
              <p>
                {" "}
                <span className="font-bold"> Description:</span> {brands.description}
              </p>
              <p className="font-semibold text-green-500">
                Category: {brands.category}
              </p>
              <p className="">Total_coupon : {brands.coupons.length}</p>
              <div>
                <p>{brands.coupons.coupon_code}</p>
              </div>
              <div className="card-actions justify-center mt-3">
              <Link to={`/details/${brands._id}`}> <button className="btn btn-primary">Get the Coupon</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrands;
