
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Input extends Component {

  render () { 
    const props = this.props;
    const { type, isRadius, isDisabled, size, defaultValue, className, ...others } = props;
    const cls = classnames({
      'ui-input'      : true,
      'disabled'      : ('disabled' in props || isDisabled),
      'radius'        : ('radius' in props || isRadius),
      ['size-' + size]: size,
      [className]     : !!className,
    });

    const input = (type == 'textarea')
               ? <textarea className={cls} {...others}>{defaultValue}</textarea>
               : <input type={type} defaultValue={defaultValue} className={cls} {...others} />;

    return (
      <span>
        {input}
      </span>
    );
  }

}

Input.propTypes = {
  type      : PropTypes.string,
  size      : PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
  isRadius  : PropTypes.bool,
  isDisabled: PropTypes.bool,
  className : PropTypes.string,
};

Input.defaultProps = {
  type      : 'text',
  size      : null,
  isRadius  : false,
  isDisabled: false,
  className : null,
};

export default Input;