import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, size, variant, startIcon, endIcon, label, disabeShadow, disabled, ...props }) => {
  const shadow = disabeShadow ? '' : 'btn--shadow';
  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        'btn',
        `btn--${size}`, 
        `btn--${color}`, 
        `btn--${color}--${variant}`, 
        `btn--${variant}`,
        shadow, 
      ].join(' ')}
      {...props}
    >
       {startIcon && <StartIconComponent className={`icon--${size}`} />}
       {label}
       {endIcon && <EndIconComponent className={`icon--${size}`} />}
    </button>
  );
};

Button.propTypes = {
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
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  color: 'default',
  variant: 'classic',
  startIcon: '',
  endIcon: '',
  size: 'sm',
  onClick: undefined,
  disabeShadow: false
};
