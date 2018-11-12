import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

import { NavProps } from '../../interfaces';
import style from './index.css';

class NavBar extends Component<NavProps>{

  private handleChange = (name: string) => {
    this.props.onChange(name);
  }

  public render() {
    const { links, activeKey } = this.props;
    return (
      <Fragment>
        <ul className={style.nav} >
          {
            links.map(({name, icon}) => {
              return (<a
                key={name}
                className={classnames([style.link, activeKey === name ? style.active : ''])}
                onClick={this.handleChange.bind(this, name)}
              >
                {activeKey === name ? icon : ''}
              </a>)
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default NavBar;
