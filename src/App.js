import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './main';

function App() {
  // 老浏览器提供的 hash模式， 我们称之为： HashRouter
  // H5提供的的 hsitory 模式，我们称之为 BrowserRouter
  // 注意： H5模式的路由需要后端支持
  return (
    <HashRouter>
      <Switch>
        {/* exact 严格匹配 */}
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;
