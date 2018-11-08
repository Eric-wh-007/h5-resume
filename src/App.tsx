import * as React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Head } from './pages';
import { Nav } from './components';
import routes from './routes';

import style from './App.css';

interface State {
  screenHeight: number;
  navRef: any;
}

class App extends React.Component<any, State> {
  public state = {
    screenHeight: 0,
    navRef: React.createRef<HTMLDivElement>(),
  }

  public componentDidMount = () => {
    const screenHeight = window.innerHeight;
    const navHeight = this.state.navRef.current;
    console.log(navHeight && navHeight.getBoundingClientRect());
    this.setState({
      screenHeight
    })
  }

  public render() {
    const { screenHeight } = this.state;
    return (
      <div className={style.AppContainer}>
        <HashRouter>
          <Route render={({ location }) => (<div className={style.App}>
            <div className={style.navContainer} ref={this.state.navRef}>
              <Nav routes={routes} activeKey='/' />
            </div>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames={{
                  enter: style.appEnter,
                  enterActive: style.appEnterActive,
                }}
                timeout={1000}
              >
                <Switch location={location}>
                  {
                    routes.map(({ path, Component, exact }) => {
                      return (
                      <Route
                        path={path}
                        key={path}
                        // @ts-ignore
                        render={() => (<Component height={screenHeight} />)}
                        exact={exact}
                      />)
                    })
                  }

                  <Route render={() => (<Head height={screenHeight} />)} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>)

          } />
        </HashRouter>
      </div>
    );
  }
}

export default App;
