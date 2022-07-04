import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextDefault from '../../Context/Context';
import "./Login.css"

function Login() {
  const history = useNavigate();
  const { user, setUser, disable, setDisable } = useContext(ContextDefault);
  const handleChange = ({ target }) => {
    setUser(target.value);
  };

  const handleSubmit = () => {
    history('/home');
  };

  useEffect(() => {
    const validate = (user.length > 2)
    validate ? setDisable(false) : setDisable(true);
  }, [user, setDisable])

  return (
    <div className='Login'>
      <h1>Olá!</h1>
      <div className='form'>
        <input
          id="USERNAME"
          name="login"
          type="text"
          placeholder="Como posso te chamar?"
          autoComplete="off"
          value={user}
          onChange={handleChange}
        />
        <button
          disabled={disable}
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Login