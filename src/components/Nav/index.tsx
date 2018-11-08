import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { NavProps } from '../../interfaces';
import style from './index.css';

class Nav extends Component <NavProps>{

  public render() {
    const { activeKey, routes } = this.props;
    return (
      <Fragment>
        <ul className={style.nav} >
        {
          routes.map(({path}) =>(
          <Link key={path} to={`${path}`}><li className={activeKey === path ? style.active: ''} /></Link>
          ))
        }
        </ul>
      </Fragment>
    );
  }
}

export default Nav;
