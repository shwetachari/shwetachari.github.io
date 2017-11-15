import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/font-awesome/css/font-awesome.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
