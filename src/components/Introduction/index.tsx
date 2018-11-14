import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';
import { intro } from '../../common/data';

class Introduction extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#56bb8a';
  }
  public render() {
    const { height } = this.props;
    const descLineHeight = height / intro.length;
    const iconHeight = height / intro.length
    return (
      <Fragment>
        <section className={style.introduction} style={{ height: `${height}px` }}>
          <div className={style.imgContainer}>
            {
              intro.map(({ name, icon, desc }) => {
                return (
                  <div key={name} className={style.main}>
                    <img src={icon} alt={name} className={style.icon} style={{height: `${iconHeight}px`}} />
                    <span className={style.desc} style={{lineHeight: `${descLineHeight}px`}}>{desc}</span>
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

export default Introduction;

