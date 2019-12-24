import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from '../home-page/homePage';
import ButtonPage from '../button-page/buttonPage';
import IconPage from '../icon-page/iconPage';
import FormPage from '../form-page/formPage';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={HomePage} />
        <Route path="/main/home-page" component={HomePage} />
        <Route path="/main/button-page" component={ButtonPage} />
        <Route path="/main/icon-page" component={IconPage} />
        <Route path="/main/form-page" component={FormPage} />
        <Route path="*" component={HomePage} />
      </Switch >
    )
  }

}
