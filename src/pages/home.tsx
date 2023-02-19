import Navbar from "../components/Navbar/desktop";
import Habilidades from "../templates/Home/Habilidades";
import Header from "../templates/Home/Header";
import QuemSou from "../templates/Home/QuemSou";

const Home = () => {
  return(
    <>
      <Navbar/>
      <Header/>
      <QuemSou/>
      <Habilidades/>
    </>
  )
}

export default Home;
