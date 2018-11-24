import React, { Component, Fragment } from 'react';

import { CommomProps } from '../../interfaces';
import style from './index.css';
import { head } from '../../common/data';

class Head extends Component<CommomProps> {
  public componentDidMount() {
    document.body.style.backgroundColor = '#36465d';
  }
  public render() {
    const { height } = this.props;
    const { avatar, author, quote, links } = head;
    return (
      <Fragment>
        <section className={style.head} style={{ height: `${height}px` }}>
          <div className={style.avatar} >
            {/* <img src={avatar} alt="avatar" /> */}
            <div style={{backgroundImage: `url(${avatar})`}} />
            <p>{author}</p>
          </div>
          <div className={style.quote}>
            <p>{quote}</p>
          </div>
          <div className={style.links}>
            <ul>
              {
                links.map(({ icon, href, name }) => {
                  return (
                    <li key={name}>
                      <a href={href} target='_blank' rel='noopener noreferrer'>
                        <img src={icon} alt={name} />
                      </a>
                    </li>)
                })
              }
            </ul>
          </div>

        </section>
      </Fragment>
    );
  }
}

export default Head;
