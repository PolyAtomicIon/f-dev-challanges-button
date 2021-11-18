import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export const Input = ({ color, size, variant, startIcon, endIcon, label, disabeShadow, disabled, ...props }) => {
  const shadow = disabeShadow ? '' : 'input-group--shadow';
  const fullWidth = disabeShadow ? '' : 'input-group--fullwidth';
  const isDisabled = disabled ? 'input-group--disabled' : '';

  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default


  
  return (
    <div
      tabIndex="0"
      disabled={disabled}
      className={[
        isDisabled,
        'input-group',
        `input-group--${size}`, 
        `input-group--${color}`, 
        shadow, 
        fullWidth,
      ].join(' ')}
    >
      {startIcon && <StartIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--left`} />}
      <input
        type="text"
        disabled={disabled}
        placeholder={label}
        className={[
          'input-group__input',
          `input-group__input--${color}`, 
        ].join(' ')}
        {...props}
      />
      {endIcon && <EndIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--right`} />}
    </div>
  );
};

Input.propTypes = {
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(['default', 'error']),
  // disabeShadow
  disabeShadow: PropTypes.bool,
  // icon on the left
  startIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  // icon on the right
  endIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['sm', 'md']),
  /**
   * Input contents
   */
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  color: 'default',
  startIcon: '',
  endIcon: '',
  size: 'sm',
  onClick: undefined,
  disabeShadow: false
};
