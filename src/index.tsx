// polyfill for IE 11
import 'react-app-polyfill/ie11';
import 'array-findindex-polyfill';
// polyfill for IE 10
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/ru';

import './index.scss';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';

moment.locale('ru');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
