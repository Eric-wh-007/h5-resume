import React, { Component, Fragment } from 'react';
import Circle from 'react-circle';

import { CommomProps } from '../../interfaces';
import style from './index.css'
import { skills } from '../../common/data';

class Skills extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#eee';
  }
  public render() {
    const { height } = this.props;
    const skillContainerHeight = height / (Math.ceil(skills.length / 2)) - 30
    return (
      <Fragment>
        <section style={{ height: `${height}px` }} className={style.skills}>
          <div className={style.container}>
            {skills.map(({ name, percent }) => {
              return (
                <div key={name} className={style.skillContainer} style={{ height: skillContainerHeight, width: skillContainerHeight }}>
                  <p className={style.name}>{name}</p>
                  <Circle
                    progress={percent}
                    textStyle={{ fontSize: '2rem' }}
                    animate={true}
                    animationDuration='1s'
                    />
                </div>
              )
            })}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Skills;

