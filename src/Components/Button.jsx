import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, buttonDisabled, testid, className } = this.props;
    return (
      <button
        type="button"
        data-testid={ testid }
        disabled={ buttonDisabled }
        onClick={ onClick }
        className={ className }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  testid: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
