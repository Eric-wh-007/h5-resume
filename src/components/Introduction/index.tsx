import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';
import birthday from '../../static/imgs/birthday.svg';
import school from '../../static/imgs/school.svg';
import phone from '../../static/imgs/phone.svg';
import email from '../../static/imgs/email.svg';


class Introduction extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#56bb8a';
  }
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section className={style.introduction} style={{ height: `${height}px` }}>
          <div className={style.imgContainer}>
            <div>
              <img src={birthday} alt="birthday" />
              <span>1995.7.15</span>
            </div>
            <div>
              <img src={school} alt="school" />
              <span>大连东软信息学院（本科）</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <span>15631220218</span>
            </div>
            <div>
              <img src={email} alt="email" />
              <span>wanghangan@gmail.com</span>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Introduction;

