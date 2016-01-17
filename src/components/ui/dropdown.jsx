import React, { Component } from 'react';

import UI from '.';
import cn from 'classnames';

export default (styles = {}) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };
    }

    componentDidUpdate(prevProps, prevStates) {
      if (prevStates.isOpen === this.state.isOpen) {
        return;
      }

      if (this.state.isOpen) {
        document.addEventListener(`click`, ::this.clickOutside);
      } else {
        document.removeEventListener(`click`, ::this.clickOutside);
      }
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    clickOutside(event) {
      if (this.state.isOpen && !this.refs.dropdown.contains(event.target)) {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }
    }

    render() {
      return (
        <div {...this.props} ref="dropdown" className={cn(styles.dropdown, this.props.className)}>
          <div className={cn(styles.placeholder, { [styles.active]: this.props.isOpen || this.state.isOpen })} onClick={::this.toggle}>
            {this.props.placeholder}
            &nbsp;
            <UI.Icon className={styles.icon} icon="chevron-down" />
          </div>

          <div className={cn(styles.container, { [styles.active]: this.props.isOpen || this.state.isOpen })}>
            {this.props.children}
          </div>
        </div>
      );
    }
  };
};
