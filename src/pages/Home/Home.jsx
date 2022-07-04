import React, { useContext } from 'react';
import ContextDefault from '../../Context/Context';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foto from "../../img/Foto.png"
import './Home.css'

function Home() {
  const { user } = useContext(ContextDefault);

  AOS.init({
    delay: 500,
    easing: 'ease',
    duration: 1800,
  });

  return (
    <div>
      <Header />
      <hr />
      <div data-aos={"fade-in"} className="homeSection">
        <div>
          <h1>Bem vindo, {user}!</h1>
          <h3>Me chamo Loan, sou desenvolvedor Web em formação, Agradeço a visita em minha Homepage.</h3>
          <h3>Clique nos links do menu acima para navegar pelo site</h3>
        </div>
        <div>
          <img src={Foto} alt="foto de loan, vestindo uma camiseta preta escrito Trybe em branco" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home