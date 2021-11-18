import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export const Input = ({ color, size, variant, startIcon, endIcon, label, disabeShadow, disabled, ...props }) => {
  const shadow = disabeShadow ? '' : 'btn--shadow';
  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default

  return (

    <div
      className={[
        'input-group',
        `input-group--${size}`, 
        `input-group--${color}`, 
        `input-group--${color}--${variant}`, 
        `input-group--${variant}`,
        shadow, 
      ].join(' ')}
    >
      <input
        type="text"
        disabled={disabled}
        placeholder={label}
        className={[
          'input-group__input',
          `input-group__input--${color}`, 
          `input-group__input--${color}--${variant}`, 
          `input-group__input--${variant}`,
          shadow, 
        ].join(' ')}
        {...props}
      />
      {startIcon && <StartIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--left`} />}
      {endIcon && <EndIconComponent className={`input-group__icon input-group__icon--${size} input-group__icon--right`} />}
    </div>
  );
};

Input.propTypes = {
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  /**
   * variant 
   */
  variant: PropTypes.oneOf(['classic', 'text', 'outline']),
  // disabeShadow
  disabeShadow: PropTypes.bool,
  // icon on the left
  startIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  // icon on the right
  endIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
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
  variant: 'classic',
  startIcon: '',
  endIcon: '',
  size: 'sm',
  onClick: undefined,
  disabeShadow: false
};
