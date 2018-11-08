import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css'

class WorkExp extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section style={{height: `${height}px`}} className={style.workexp}>
          3
        </section>
      </Fragment>
    );
  }
}

export default WorkExp;

