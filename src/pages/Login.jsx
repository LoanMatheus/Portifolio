import React, { useContext } from 'react';
import Input from '../Components/Input';
import ProviderDefault from '../Context/Provider';

function Login(){
  const data = useContext(ProviderDefault);
  const handleChange = ({ target }) => {
    data.setUser(target.value);
  };
  return(
    <div>
      <label htmlFor="search-input">
        <input
          data-testid="name-filter"
          id="search-input"
          type="text"
          placeholder="Pesquisar"
          onChange={ handleChange }
        />
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