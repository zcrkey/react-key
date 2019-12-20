import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Div, Iconfont } from '../src/index.js';
import minImages from '../src/images/min.png';
import maxImages from '../src/images/max.png';

if (document.getElementById('root')) {
  ReactDOM.render(
    <div>
      <img src={minImages}></img>
      <img src={maxImages} width='84' height='84'></img>
      <br />
      <Iconfont name={'danxuan'}></Iconfont>
      <Iconfont name={'yuanxingweixuanzhong'}></Iconfont>
      <Iconfont name={'fangxingxuanzhong'}></Iconfont>
      <Iconfont name={'fangxingweixuanzhong'}></Iconfont>
      <br />
      <Button text={'默认按钮'} />
      <Button type={'primary'} text={'按钮一'} />
      <Button type={'normal'} text={'按钮二'} />
      <Button type={'warm'} text={'按钮三'} />
      <Button type={'danger'} text={'按钮四'} />
      <Button type={'disabled'} text={'按钮五'} />
      <div style={{ width: '300px' }}>
        <br />
        <Input />
      </div>
      <br />
      <Div></Div>
    </div >, document.getElementById('root'));
}
