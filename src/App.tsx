import * as React from 'react';

import { Home } from './pages';
import { Nav } from './components';
import { paths } from './common/constants';
import style from './App.css';

interface State {
  screenHeight: number;
}

class App extends React.Component<any, State> {
  public state = {
    screenHeight: 0,

  }

  public componentDidMount = () => {
    const screenHeight = window.innerHeight;
    this.setState({
      screenHeight
    })
    document.addEventListener('mousewheel', this.handleMouseWheel)
  }

  public componentWillUnmount = () => {
    document.removeEventListener('mousewheel', this.handleMouseWheel);
  }

  private handleMouseWheel = (e: any) => {
    console.log('wheel', e.pageX, e.pageY)
  }

  public render() {
    return (
      <div className={style.AppContainer}>
        <div className={style.navContainer}><Nav paths={paths} defaultActiveKey='/head' /></div>
        <Home height={this.state.screenHeight} />
      </div>
    );
  }
}

export default App;
