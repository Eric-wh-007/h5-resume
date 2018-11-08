import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';

class Instruction extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.introduction} style={{height: `${height}px`}}>
          2
        </section>
      </Fragment>
    );
  }
}

export default Instruction;

