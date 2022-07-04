import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Footer.css";


function Header() {
  const history = useNavigate();
  const headerRoute = (target) => {
    switch (target.target.id) {
      case 'routeContact':
        history('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <footer>
      <h5>
        <small>
          Site desenvolvido em React por <span id='routeContact' onClick={headerRoute}>Loan</span> - 2022
        </small>
      </h5>
    </footer>
  )
}

export default Header;