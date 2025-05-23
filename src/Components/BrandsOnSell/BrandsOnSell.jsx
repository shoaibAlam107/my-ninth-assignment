import { useLoaderData } from "react-router-dom"
import ForSell from "../ForSell/ForSell"


const BrandsOnSell = () => {
    const data = useLoaderData()
    const brandsOnSell = data.filter(brand => brand.isSaleOn)    
  return (
    <div>
            <h1 className="text-xl font-bold mb-4 text-green-500">Brands on Sell :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
               brandsOnSell.map(brand => <ForSell key={brand._id} brand={brand}></ForSell>  )
            }
        </div>
  

  
    </div>
  )
}

export default BrandsOnSell
