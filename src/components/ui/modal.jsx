/* Based on https://github.com/zackify/simple-react-modal */
import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

class Modal extends Component {
  static propTypes = {
    closeOnOuterClick: PropTypes.bool,
    onClose: PropTypes.func,
    show: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);

    this.hideOnOuterClick = ::this.hideOnOuterClick;
  }

  render() {
    if (this.props.show) {
      return (
        <div {...this.props} className={cn('f-modal', this.props.className)} onClick={this.hideOnOuterClick} data-modal="true">
          <div className="f-modal-body">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return false;
    }
  }

  hideOnOuterClick(event) {
    if (!this.props.closeOnOuterClick) return;
    if (event.target.dataset.modal) {
      this.props.onClose(event);
    }
  }
}

export default Modal;
