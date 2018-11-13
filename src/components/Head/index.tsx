import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';

class Head extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.head} style={{height:`${height}px`}}>
          <div className={style.avatar} />
          <div className={style.quote}>
          <p>越努力越幸运</p>
          </div>
          <div className={style.links}>
            <ul>
              <li><a href='/'>简书博客</a> </li>
              <li><a href='/' target='_blank' rel='noopener noreferrer'>个人博客网站</a></li>
              <li><a href='/' target='_blank' rel='noopener noreferrer'>github</a></li>
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Head;
