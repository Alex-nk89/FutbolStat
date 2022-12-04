import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import reportWebVitals from './reportWebVitals';

import App from './components/templates/App/App';
import theme from './utils/theme';

import './index.scss';
import '@fontsource/public-sans';
import '@fontsource/inter';
import '@fontsource/roboto';
import '@fontsource/poppins';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
