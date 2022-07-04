import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";


function Header() {
  const history = useNavigate();
  const headerRoute = (target) => {
    switch (target.target.id) {
      case 'routeHome':
        history('/home');
        break;
      case 'routeAbout':
        history('/about');
        break;
      case 'routeProjects':
        history('/projects');
        break;
      case 'routeContact':
        history('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <header>
      <div id='routeHome' className='logo' onClick={headerRoute}>
        {'<LM/>'}
      </div>

      <div>
        <ul>
          <li id='routeAbout' onClick={headerRoute}>SOBRE MIM</li>
          <li id='routeProjects' onClick={headerRoute}>PROJETOS</li>
          <li id='routeContact' onClick={headerRoute}>CONTATO</li>
        </ul>
      </div>

    </header>
  )
}

export default Header;