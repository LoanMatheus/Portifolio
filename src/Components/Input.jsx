import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, id, placeholder} = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          placeholder={ placeholder }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  placeholder: '',
  onChange: null,
};

export default Input;
