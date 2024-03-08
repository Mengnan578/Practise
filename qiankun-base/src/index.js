import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter} from "react-router-dom";
import {registerMicroApps, start} from "qiankun";


// 在基座中注册子应用
registerMicroApps([
    {
        name: 'vueApp',
        entry: '//localhost:8080',
        container: '#container',
        activeRule: '/app-vue',
    },
    {
        name: 'reactApp',
        entry: '//localhost:4000',
        container: '#container',
        activeRule: '/app-react',
    },
]);
start()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
