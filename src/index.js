import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.css';
import './tech-icons/dist/icons.css';
import './styles/fonts.css';
import './styles/main.css';
import $ from '../node_modules/jquery/dist/jquery.js';
window.$ = window.jQuery = $;
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('../node_modules/bootstrap/dist/js/bootstrap.js');

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
