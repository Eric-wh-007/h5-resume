import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';
import { projectExp } from '../../common/data';


class ProjectExp extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#a77dc2';
  }
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.projectexp} style={{ height: `${height}px` }} >
          <div className={style.container}>
            {
              projectExp.map(({ name, desc }) => {
                return (
                  <div key={name} className={style.main}>
                    <h4 className={style.title}>{name}</h4>
                    <p className={style.desc}>{desc}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ProjectExp;

