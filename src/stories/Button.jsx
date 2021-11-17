import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, startIcon, endIcon, label, disabeShadow, ...props }) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary';
  const shadow = disabeShadow ? '' : 'btn--shadow';
  const StartIconComponent = startIcon && require(`@material-ui/icons/${startIcon}`).default
  const EndIconComponent = endIcon && require(`@material-ui/icons/${endIcon}`).default
  
  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, mode, shadow].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
       {startIcon && <StartIconComponent className={`icon--${size}`} />}
       {label}
       {/* {endIcon && <EndIconComponent  fontSize={size}  />} */}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  // disabeShadow
  disabeShadow: PropTypes.bool,
  // icon on the left
  startIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  // icon on the right
  endIcon: PropTypes.oneOf(['', 'AccessAlarm', 'AcUnitRounded', 'AccountCircleRounded', 'AccountTreeRounded', 'AirRounded']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  startIcon: '',
  endIcon: '',
  size: 'medium',
  onClick: undefined,
  disabeShadow: false
};
