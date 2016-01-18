import React, { Component } from 'react';

import UI from '.';
import cn from 'classnames';
import { mixStyles } from './helpers';

export default (styles = {}) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };

      this.onClick = ::this.onClick;
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.isOpen !== this.state.isOpen) {
        if (this.state.isOpen) {
          document.addEventListener(`click`, this.onClick);
        } else {
          document.removeEventListener(`click`, this.onClick);
        }
      }
    }

    componentWillUnmount() {
      document.removeEventListener(`click`, this.onClick);
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    onClick(event) {
      if (!this.refs.dropdown.contains(event.target)) {
        this.setState({ isOpen: !this.state.isOpen });
      }
    }

    render() {
      const style = mixStyles(styles, this.props.styles);
      const cns = {
        dropdown: cn(style.dropdown, { [style.active]: this.props.isOpen || this.state.isOpen }),
        icon: style.icon,
        placeholder: style.placeholder,
        container: style.container,
      };

      return (
        <div {...this.props} ref="dropdown" className={cns.dropdown}>
          <div className={cns.placeholder} onClick={::this.toggle}>
            {this.props.placeholder}
            <UI.Icon className={cns.icon} icon="chevron-down" />
          </div>

          <div className={cns.container}>
            {this.props.children}
          </div>
        </div>
      );
    }
  };
};
