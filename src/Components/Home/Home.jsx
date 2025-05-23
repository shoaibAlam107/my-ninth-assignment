import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="mx-auto py-3 w-3/4">

      <Outlet></Outlet>
      </section>
    </div>
  )
}

export default Home
