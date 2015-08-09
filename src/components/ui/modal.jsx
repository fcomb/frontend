import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { Spring } from 'react-motion';

import 'styles/components/modal';

class Modal extends Component {
  static propTypes = {
    closeOnOuterClick: PropTypes.bool,
    onClose: PropTypes.func,
    active: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    toggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.hideOnOuterClick = ::this.hideOnOuterClick;
  }

  componentDidMount() {
    document.addEventListener('keydown', ::this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', ::this.onKeyDown, false);
  }

  onKeyDown(e) {
    const { keyCode } = e;

    if (this.props.active && keyCode === 27) {
      this.props.toggle();
    }
  }

  render() {
    if (!this.props.active) {
      return false;
    }

    const className = {
      'f-modal': true,
      'active': this.props.active,
    };

    return (
      <Spring defaultValue={{top: { val: -10 }, opacity: { val: 0 }}} endValue={{top: { val: 10 }, opacity: { val: 1 }}}>
        {interpolated => {
          const { top, opacity } = interpolated;

          return (
            <div {...this.props} className={cn(className, this.props.className)} onClick={this.hideOnOuterClick} data-modal="true">
              <div className="f-modal-content" style={{top: `${top.val}rem`, opacity: opacity.val}}>
                {this.props.children}
              </div>
            </div>
          );
        }}
      </Spring>
    );
  }

  hideOnOuterClick(e) {
    if (!this.props.closeOnOuterClick) return;
    if (e.target.dataset.modal) {
      this.props.onClose(e);
    }
  }
}

export default Modal;
