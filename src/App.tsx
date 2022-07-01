/*
 * @Description: file content
 * @Version: file content
 * @Autor: jiuyi
 * @Date: 2022-04-07 15:57:07
 * @LastEditors: jiuyi
 * @LastEditTime: 2022-06-28 11:32:18
 */
import React from 'react';
import './App.css';
import MainPage from './views/MainPage';
import PersonalCenter from './views/PersonalCenter';
import HomePage from './views/MainPage/views/HomePage';
import Article from './views/MainPage/views/Article';
import Other from './views/MainPage/views/Other';
import NotFound from './views/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props: any) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />}>
					<Route index={true} element={<HomePage />}></Route>
					<Route path='article' element={<Article />}></Route>
					<Route path='other' element={<Other />}></Route>
				</Route>
				<Route path='personal-center' element={<PersonalCenter />}></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
