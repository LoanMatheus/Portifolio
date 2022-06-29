import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextDefault from './Context';

function ProviderDefault({ children }) {
  const [user, setUser] = useState("");
  const [dataAPI2, setDataAPI2] = useState([]);
  const value = {
    user,
    setUser,
    dataAPI2,
    setDataAPI2,
  };

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
