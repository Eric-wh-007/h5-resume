import * as React from 'react';

import { Home } from './pages';
import { NavBar } from './components';
import { links } from './common/constants';
import style from './App.css';
import { debounce } from './utils';

interface State {
  screenHeight: number;
  top: number;
  curActiveKeyIndex: number;
}

let startY = 0;
let endY = 0;

class App extends React.Component<any, State> {
  public state = {
    screenHeight: 0,
    top: 0,
    curActiveKeyIndex: 0,
  }

  public componentDidMount = () => {
    const screenHeight = window.innerHeight;
    this.setState({
      screenHeight
    })
    document.addEventListener('mousewheel', debounce(this.handleMouseWheel, 50, true))
    document.addEventListener('touchstart', this.handelTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);
  }

  public componentWillUnmount = () => {
    document.removeEventListener('mousewheel', debounce(this.handleMouseWheel, 50, true));
    document.removeEventListener('touchstart', this.handelTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }

  private handleMouseWheel = (e: any) => {
    e.wheelDeltaY < 0 ? this.updateHomeTop('up') : this.updateHomeTop('down');
  }

  private handleNavChange = (key: string) => {
    this.setState({
      top: this.getActiveTop(key),
      curActiveKeyIndex: links.findIndex(({ name }) => name === key),
    })
  }

  private getActiveTop = (key: string): number => {
    const { screenHeight } = this.state;
    const index = links.findIndex(({ name }) => name === key);
    const top = screenHeight * index;
    return -top;
  }

  public handelTouchStart = (e: any) => {
    startY = e.changedTouches[0].clientY;
  }

  public handleTouchEnd = (e: any) => {
    endY = e.changedTouches[0].clientY;
    const distance = endY - startY;

    const value = 10; // 直接跳转的阈值
    if (distance > 0 && Math.abs(distance) > value) {  // 手指往下划 并且距离足够 top为负
      this.updateHomeTop('down');
    } else if (distance < 0 && Math.abs(distance) > value) {  // 手指往上划 并且距离足够 top为负
      this.updateHomeTop('up');
    }
  }

  private updateHomeTop = (direction: 'up' | 'down'): void => {
    const { screenHeight, curActiveKeyIndex } = this.state;
    let top;
    let activeIndex = curActiveKeyIndex;
    if (direction === 'up') {  // 手指往上划 并且距离足够 top为负
      activeIndex++;
      if (activeIndex >= links.length) { // 移动超出屏幕
        return;
      }
      top = - activeIndex * screenHeight;
    } else { // 手指往下划 并且距离足够 top为正
      activeIndex--;
      if (activeIndex < 0) { // 移动超出屏幕
        return;
      }
      top = - activeIndex * screenHeight;
    }

    this.setState({
      curActiveKeyIndex: activeIndex,
      top,
    })
  }

  public render() {
    const { curActiveKeyIndex, top, screenHeight } = this.state;
    const activeMenuKey = links[curActiveKeyIndex].name;
    return (
      <div
        className={style.AppContainer}
        style={{ height: screenHeight }}
        id='app'
      >
        <div className={style.navContainer}>
          <NavBar links={links} activeKey={activeMenuKey} onChange={this.handleNavChange} />
        </div>
        <Home height={screenHeight} top={`${top}px`} />
      </div>
    );
  }
}

export default App;
