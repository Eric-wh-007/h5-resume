import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css'
import gago from '../../static/imgs/gago.svg';
import tencent from '../../static/imgs/tencent.svg';

class WorkExp extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#ed6d50';
  }
  public render() {
    const { height } = this.props;
    return (
      <Fragment>
        <section style={{ height: `${height}px` }} className={style.workexp}>
          <div className={style.content}>
            <div className={style.top}>
              <img className={style.logo} src={tencent} alt="tencent" />
              <span className={style.title}> 大连腾讯 前端实习生 2017.10 - 2018.1</span>
            </div>
            <p className={style.desc}>
              在职期间负责 “互联网+ 项目管理系统” 的开发与维护，在开发新功能的同时改造老旧代码，重构了部分代码
              ，使得开发更高效，bug率明显减少，并独立开发了微信端，解决了pc的限制，随时随地都可办公。
            </p>
          </div>
          <div className={style.content}>
            <div className={style.top}>
              <img className={style.logo} src={gago} alt="gago" />
              <span className={style.title}>佳格天地 前端工程师 2018.3 - 至今</span>
            </div>
            <p className={style.desc}>
                在职期间负责老项目 GagoEngine GagoMill 的开发与维护 以及新项目 GagoPublisher的开发
                其中GagoEngine 为Angular开发 为此用了一周时间快速学习Angular达到了可以上手的程度。
                GagoPublisher前后台均为个人独立开发，本着“高内聚、低耦合”的原则，代码实现非常优雅。
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WorkExp;

