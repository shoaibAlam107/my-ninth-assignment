import logo from "../assets/logo.avif"

const Header = () => {
  return (
   <div>
     <div className="flex justify-between items-center">
      <div className="">
        <img className="md:w-36 w-20 h-16" src={logo} alt="" srcset="" />
      </div>
      <div className=""></div>
      <div className="">
        <button className="btn mr-2">Login</button>
        <button className="btn">Register</button>
      </div>
     
    </div>
    <div className="divider"></div>
   </div>
  )
}

export default Header
