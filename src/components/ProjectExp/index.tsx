import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';

class ProjectExp extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.projectexp} style={{height: `${height}px`}} >4</section>
      </Fragment>
    );
  }
}

export default ProjectExp;

