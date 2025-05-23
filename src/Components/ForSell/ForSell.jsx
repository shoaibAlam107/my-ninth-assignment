
const ForSell = ({brand}) => {
  return (
    <div className="card card-compact bg-base-100 w-72 h-80 shadow-xl border border-black ">
    <figure>
      <img
        className="w-auto py-3"
        src={brand.brand_logo}
        alt={brand.brand_name}
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Brand_Name : {brand.brand_name}</h2>
      <p className="font-semibold text-green-500">
        Category: {brand.category}
      </p>
      <p className="">Total_coupon : {brand.coupons.length}</p>
    </div>
  </div>
  )
}

export default ForSell
