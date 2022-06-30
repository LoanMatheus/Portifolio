import React, { useContext } from 'react';
import ContextDefault from '../../Context/Context';
import "./Login.css"

function Login() {
  const { user, setUser } = useContext(ContextDefault);
  const handleChange = ({ target }) => {
    setUser(target.value);
  };
  return (
    <div className='Login'>
      <h1>Ola!</h1>
      <input
        id="USERNAME"
        name="login"
        type="text"
        placeholder="Digite seu Nome"
        value={user}
        autocomplete="off"
        onChange={handleChange} />
    </div>
  )
}

export default Login