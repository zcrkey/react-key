import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from '../home/home';
import ButtonPage from '../button/button';
import IconfontPage from '../iconfont/iconfont';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={HomePage} />
        <Route path="/main/home" component={HomePage} />
        <Route path="/main/button" component={ButtonPage} />
        <Route path="/main/iconfont" component={IconfontPage} />
        <Route path="*" component={HomePage} />
      </Switch >
    )
  }

}
