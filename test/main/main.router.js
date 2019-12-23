import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from '../home-page/home-page';
import ButtonPage from '../button-page/button-page';
import IconPage from '../icon-page/icon-page';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={HomePage} />
        <Route path="/main/home-page" component={HomePage} />
        <Route path="/main/button-page" component={ButtonPage} />
        <Route path="/main/icon-page" component={IconPage} />
        <Route path="*" component={HomePage} />
      </Switch >
    )
  }

}
