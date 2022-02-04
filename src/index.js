import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="96ac66df-9d18-4110-9070-e724cac7a2e3" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));