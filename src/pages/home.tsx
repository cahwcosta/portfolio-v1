import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Experiencias from "../templates/Home/Experiencias";
import Habilidades from "../templates/Home/Habilidades";
import Header from "../templates/Home/Header";
import QuemSou from "../templates/Home/QuemSou";

const Home = () => {
  return(
    <>
      <Navbar/>
      <Modal isOpen={true}>A</Modal>
      <Header/>
      <QuemSou/>
      <Habilidades/>
      {/* <Experiencias/> */}
    </>
  )
}

export default Home;
