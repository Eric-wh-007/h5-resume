import React, { Component } from 'react';

import { Head, Instroduction, ProjectExp, WorkExp } from '../../components';
import { CommomProps } from '../../interfaces';

class Home extends Component<CommomProps> {
  public render() {
    const { height } = this.props;
    return (
      <div>
        <div id='head'><Head height={height} /></div>
        <div id='instroduction'><Instroduction height={height} /></div>
        <div id='workExp'><WorkExp height={height} /></div>
        <div id='projectExp'><ProjectExp height={height} /></div>
      </div>
    );
  }
}

export default Home;