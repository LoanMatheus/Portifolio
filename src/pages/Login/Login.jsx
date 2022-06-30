import React, { useContext } from 'react';
import Input from '../../Components/Input';
import ContextDefault from '../../Context/Context';
import "./Login.css"

function Login(){
  const { user, setUser } = useContext(ContextDefault);
  const handleChange = ({ target }) => {
   setUser(target.value);
  };
  return(
    <div className='Login'>
      <h1>Ola!</h1>
      <Input
      id="USERNAME"
      name="login"
      type="text"
      placeholder="Digite seu Nome"
      value={ user }
      onChange={ handleChange }/>
    </div>
  )
}

export default Login