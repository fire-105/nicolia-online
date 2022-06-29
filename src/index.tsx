/*
 * @Description: file content
 * @Version: file content
 * @Autor: jiuyi
 * @Date: 2022-04-07 15:57:07
 * @LastEditors: jiuyi
 * @LastEditTime: 2022-06-28 15:37:57
 */
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainPage from './views/MainPage';
import PersonalCenter from './views/PersonalCenter';
import HomePage from './views/MainPage/views/HomePage';
import Article from './views/MainPage/views/Article';
import Other from './views/MainPage/views/Other';
const root = createRoot(document.getElementById('root') as Element);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<MainPage />}>
				<Route path='/homepage' element={<HomePage />} />
				<Route path='/article' element={<Article />} />
				<Route path='/other' element={<Other />} />
			</Route>
			<Route path='/personal-center' element={<PersonalCenter />} />
		</Routes>
	</BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
