import React, { Component } from 'react';

import { Head, Instroduction, ProjectExp, WorkExp } from '../../components';
import { HomeProps } from '../../interfaces';
import style from './index.css';

class Home extends Component<HomeProps> {
  public render() {
    const { height, top } = this.props;
    return (
      <div style={{top}} className={style.home} id='home'>
        <div id='head'><Head height={height} /></div>
        <div id='instroduction'><Instroduction height={height} /></div>
        <div id='workExp'><WorkExp height={height} /></div>
        <div id='projectExp'><ProjectExp height={height} /></div>
      </div>
    );
  }
}

export default Home;