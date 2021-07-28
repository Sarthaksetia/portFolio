import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'

// const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
