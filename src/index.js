import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/MainContainer.tsx';
import Desktop from './App@desktop.jsx'
import Mobile from './App@mobile.jsx'
const DeviceDetector = require('device-detector');

DeviceDetector.parse()
const device = DeviceDetector.parse(navigator.userAgent) || {};
const type = device.type;
console.log('device', type)

ReactDOM.render(type === "Desktop" ? <Desktop /> : <Mobile/>, document.getElementById('root'));

