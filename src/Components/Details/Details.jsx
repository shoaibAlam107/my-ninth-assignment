import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const brandDetails = data.find((coupon) => coupon._id === id);
  console.log(brandDetails);
  const {
    _id,
    isSaleOn,
    category,
    shop_Link,
    coupons,
    brand_logo,
    description,
    rating,
    brand_name,
    coupon_code,
  } = brandDetails;
  return (
    <div>
      <h3 className="text-lg font-bold text-green-500 text-center">Coupons Details</h3>
    <div className="card bg-base-100 w-full md:w-3/4 mx-auto shadow-xl">
      <figure className="px-10 pt-10">
        <img src={brand_logo} alt={brand_name} className="rounded-xl w-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title items-start">Brand_Name: {brand_name}</h2>
        <p>
          
          <span className="font-bold"> Description:</span>  {description}
        </p>
        <p className="font-semibold text-gray-600">Category: <span className="text-yellow-700"> {category}</span></p>
        
        {/* cupon start */}

        <h3 className="text-lg font-semibold text-green-500">Available Coupons:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 m-5 ">
          {coupons.map((coupon) => (
            <div key={coupon.coupon_code}>
            <div className="card  w-full md:w-auto  shadow-xl">
              
              <div className="p-5">
              <p className="text-sm text-gray-600 font-bold">
                  Code: 
                  <span className="font-extrabold text-orange-600">   {coupon.coupon_code}</span>
                </p>
              <h4 className="font-semibold"> Description: <span className="font-medium"> {coupon.description}</span></h4>
              <h4 className="font-semibold"> Expiry Date: <span className="font-medium"> {coupon.expiry_date}</span></h4>
              <h4 className="font-semibold"> Condition: <span className="font-medium"> {coupon.condition}</span></h4>
              <h4 className="font-semibold"> Coupon Type:<span className="font-medium"> {coupon.coupon_type}</span></h4>
               
                
              </div>
            </div>
            </div>
          ))}
        </div>

      
 
        <div className="card-actions flex justify-center ">
          <button className="btn btn-primary w-3/4">use Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;




  {/* <div className="mt-6">
          <h3 className="text-lg font-semibold">Available Coupons:</h3>
          <div className="space-y-4 mt-3">
            {coupons.map((coupon) => (
              <div
                key={coupon.coupon_code}
                className="border p-3 rounded-lg bg-gray-100 shadow-sm"
              >
                <h4 className="font-semibold">{coupon.description}</h4>
                <p className="text-sm text-gray-600">
                  Code:{" "}
                  <span className="font-medium">{coupon.coupon_code}</span>
                </p>
                <h4 className="font-semibold">{coupon.description}</h4>
                <p className="text-sm text-gray-600">
                  Code:{" "}
                  <span className="font-medium">{coupon.coupon_code}</span>
                </p>
              </div>
            ))}
          </div>
        </div> */}