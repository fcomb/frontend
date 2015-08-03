import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router';

class Header extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className={cn('navbar-toggle', 'collapsed')} onClick={::this.toggle}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">fcomb</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/explore" activeClassName="active">Explore</Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">About</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state);
  }
}

export default Header;
