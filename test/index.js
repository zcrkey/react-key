import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from '../src/index.js';

if (document.getElementById('root')) {
  ReactDOM.render(
    <div>
      <Button text={'默认按钮'} />
      <Button type={'primary'} text={'按钮一'} />
      <Button type={'normal'} text={'按钮二'} />
      <Button type={'warm'} text={'按钮三'} />
      <Button type={'danger'} text={'按钮四'} />
      <Button type={'disabled'} text={'按钮五'} />
      <div style={{ width: '300px', marginTop: '15px' }}>
        <Input />
      </div>
    </div >, document.getElementById('root'));
}
