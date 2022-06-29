/*
 * @Description: file content
 * @Version: file content
 * @Autor: jiuyi
 * @Date: 2022-04-07 15:57:07
 * @LastEditors: jiuyi
 * @LastEditTime: 2022-06-28 15:37:57
 */
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root') as Element);
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
