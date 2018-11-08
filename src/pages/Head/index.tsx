import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';

class Head extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.head} style={{height:`${height}px`}}>
          head
        </section>
      </Fragment>
    );
  }
}

export default Head;
