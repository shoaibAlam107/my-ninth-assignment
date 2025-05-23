
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import Header from "../Components/Header"
import { Outlet } from "react-router-dom"


const HomeLayout = () => {
  return (
    <div>
      
     <header className="w-11/12 mx-auto py-3">
      <Header></Header>
      <section className="md:w-11/12 lg:w-11/12 w-3/4 mx-auto py-3 ">
      <Navbar></Navbar>
      </section>
      </header>
      <main>
        <section className="w-11/12 mx-auto py-3">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  )
}

export default HomeLayout
