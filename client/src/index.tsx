import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { stores } from './stores/store';
import { render } from 'react-dom';



const rootElement = document.getElementById('root')
render(
  <Provider store={stores}>
    <App />
  </Provider>,
  rootElement
)
