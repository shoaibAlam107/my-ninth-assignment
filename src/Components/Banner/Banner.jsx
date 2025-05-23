import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"
import banner6 from "../../assets/banner6.jpg"
import TopBrands from "../TopBrands/TopBrands"
import Marquee from "react-fast-marquee";
import BrandsOnSell from "../BrandsOnSell/BrandsOnSell"
const Banner = () => {
    const data =useLoaderData()
   
  return (
    <div>
        <section>

      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={banner1}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={banner2}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={banner3}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={banner4}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img
      src={banner5}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img
      src={banner6}
      className="md:w-5/6 lg:w-5/6 w-3/4  h-96 mx-auto" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide5" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </section>

        <section className="my-20">
        <h1 className="font-bold text-2xl text-orange-500">Top Brands :</h1>
        <div className="">
        <Marquee  pauseOnHover={true} className="p-4 bg-gray-100 overflow-hidden gap-20">
            <div className="grid grid-cols-10  gap-5">
            
            {
                data.map(brands => <TopBrands key={brands._id} brands={brands}></TopBrands>)
            }
            </div>
            </Marquee>
        </div>
        </section>
           
    </div>
  )
}

export default Banner
