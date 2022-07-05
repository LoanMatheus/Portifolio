import React, { useContext } from 'react';
import ContextDefault from '../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foto from "../../img/Foto.png";
import HTML from "../../img/html-5.png";
import CSS from "../../img/css-3.png";
import JS from "../../img/js.png";
import REACT from "../../img/react.png";
import './Headline.css';

function Headline() {
  const { user } = useContext(ContextDefault);

  AOS.init({
    delay: 500,
    easing: 'ease',
    duration: 1800,
  });

  return (
    <div className="headline">
      <div className='backHeadline'></div>
      <div data-aos={"fade-in"} className="homeSection">
        <div className='homeBox'>
          <h1>Bem vindo, {user}!</h1>
          <h3>Me chamo Loan, sou desenvolvedor Web em formação.</h3>
          <h3>Algumas das linguagens com as quais trabalho:</h3>
          <div className='linguagens'>
            <div className='cardLinguagens'>
              <img src={HTML} alt="icone HTML" />
              <h5>HTML</h5>
            </div>
            <div className='cardLinguagens'>
              <img src={CSS} alt="icone HTML" />
              <h5>CSS</h5>
            </div>
            <div className='cardLinguagens'>
              <img src={JS} alt="icone HTML" />
              <h5>JavaScript</h5>
            </div>
            <div className='cardLinguagens'>
              <img src={REACT} alt="icone HTML" />
              <h5>React Js</h5>
            </div>

          </div>
        </div>
        <div className='foto'>
          <img src={Foto} alt="foto de loan, vestindo uma camiseta preta escrito Trybe em branco" />
        </div>
      </div>
    </div>
  )
}

export default Headline;