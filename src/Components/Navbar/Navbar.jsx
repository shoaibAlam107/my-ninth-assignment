import { Link } from "react-router-dom"
import { IoMdHome } from "react-icons/io";
import { TbBrandShopee } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div>
      <div className="nav md:space-x-12 items-center flex flex-col  md:flex md:justify-center md:flex-row">
        <Link to="/"  className="font-bold"> <div className="flex  gap-1 items-center"><IoMdHome />Home</div></Link>
        <Link to="/brands"  className="font-bold"> <div className="flex  gap-1 items-center"> <TbBrandShopee />
        Brands</div></Link>
        <Link  className="font-bold"> <div className="flex justify-center  gap-1 items-center"><CgProfile /> My-Profile </div> </Link>
        <Link to="/about"   className="font-bold"><div className="flex  gap-1 justify-center items-center"> <FcAbout />About Dev</div></Link>
      </div>
    </div>
  )
}

export default Navbar
