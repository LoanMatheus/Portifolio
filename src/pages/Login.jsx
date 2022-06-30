import React, { useContext } from 'react';
import Input from '../Components/Input';
import ProviderDefault from '../Context/Provider';

function Login(){
  const data = useContext(ProviderDefault);
  const handleChange = ({ target }) => {
    data.setUser(target.value);
  };
  console.log(data)
  return(
    <div>
      <label htmlFor="search-input">
      <label htmlFor="EmailInput">
          Email
          <input
            type="email"
            name="EmailInput"
            id="EmailInput"
            value={ data }
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>
      </label>
      <Input
      type="text"
      id="USERNAME"
      name="login"
      placeholder="Digite seu Nome"
      onChange={ handleChange }/>
    </div>
  )
}

export default Login