import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
