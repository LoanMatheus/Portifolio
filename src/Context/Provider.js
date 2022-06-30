import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextDefault from './Context';

function ProviderDefault({ children }) {
  const [user, setUser] = useState("");
  const [dataAPI, setDataAPI] = useState([]);
  const value = {
    user,
    setUser,
    dataAPI,
    setDataAPI,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const ENDPOINT = 'https://dog.ceo/api/breeds/image/random';
      const { message } = await fetch(ENDPOINT).then((response) => response.json());
      setDataAPI(message);
    }
    fetchAPI();
  }, []);
  return (
    <ContextDefault.Provider value={value}>
      {children}
    </ContextDefault.Provider>
  );
}

ProviderDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDefault;
