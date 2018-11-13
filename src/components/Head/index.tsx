import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';
import avatar from '../../static/imgs/genji.jpeg'
import github from '../../static/imgs/github.svg';
import blog from '../../static/imgs/blog.svg';
import website from '../../static/imgs/web.svg';

class Head extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#36465d';
  }
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.head} style={{ height: `${height}px` }}>
            <div className={style.avatar} >
              <img src={avatar} alt="avatar"/>
              <p>王航</p>
            </div>
            <div className={style.quote}>
              <p>越努力，越幸运</p>
            </div>
            <div className={style.links}>
              <ul>
                <li><a href='/' target='_blank' rel='noopener noreferrer'><img src={github} alt="github"/></a> </li>
                <li><a href='/' target='_blank' rel='noopener noreferrer'><img src={blog} alt="blog"/></a></li>
                <li><a href='/' target='_blank' rel='noopener noreferrer'><img src={website} alt="website"/></a></li>
              </ul>
            </div>
          
        </section>
      </Fragment>
    );
  }
}

export default Head;
