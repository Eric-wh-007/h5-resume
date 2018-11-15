import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css'
import { workExp } from '../../common/data';

class WorkExp extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#b8cca6';
  }
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section style={{ height: `${height}px` }} className={style.workexp}>
          {
            workExp.map(({ company, position, time, icon, desc }) => {
              return (
                <div className={style.content} key={company}>
                  <div className={style.top}>
                    <img className={style.logo} src={icon} alt={company} />
                    <span className={style.title}>{`${company} ${position} ${time}`}</span>
                  </div>
                  <p className={style.desc}>{desc}</p>
                </div>
              )
            })
          }
        </section>
      </Fragment>
    );
  }
}

export default WorkExp;

