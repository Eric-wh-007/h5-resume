import React, { Component, Fragment } from 'react';

import { NavProps } from '../../interfaces';
import style from './index.css';

class Nav extends Component <NavProps>{

  public render() {
    const { defaultActiveKey, paths } = this.props;
    return (
      <Fragment>
        <ul className={style.nav} >
        {
          paths.map(path =>(
          <a key={path} className={style.link} href={`${path}`}><li className={defaultActiveKey === path ? style.active: ''} /></a>
          ))
        }
        </ul>
      </Fragment>
    );
  }
}

export default Nav;
