import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS - Loading Order Important - just like static HTML!
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons';
import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
