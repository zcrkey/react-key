import React from 'react';
import { Switch, Route } from "react-router-dom";

// 首页
import Buttons from './example/buttons/buttons';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/main" component={Buttons} />
        <Route path="/main/buttons" component={Buttons} />
      </Switch >
    )
  }

}
