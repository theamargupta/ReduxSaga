import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.scss';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//Material ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Utils/theme.js';
//redux
import { Provider } from 'react-redux';
import ConfigStore from './redux';
const store = ConfigStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
