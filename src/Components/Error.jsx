import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="p-6">
     <div className="py-3">
        <p className="text-center font-bold text-5xl py-5">404 Page</p>
        <p className="text-center font-semibold text-2xl text-red-700">This Page Is Not Found</p>
     </div>
     <Link to="/" className="items-center flex justify-center"><button className="btn text-green-600  font-semibold text-lg">Go Back To Home</button></Link>
    </div>
  )
}

export default Error
