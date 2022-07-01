/*
 * @Description: file content
 * @Version: file content
 * @Autor: jiuyi
 * @Date: 2022-06-28 11:20:25
 * @LastEditors: jiuyi
 * @LastEditTime: 2022-06-28 15:34:35
 */
import { Link, Outlet } from 'react-router-dom';
const MainPage = () => {
	return (
		<>
			主页
			<div>
				<Link to='other'>Invoices</Link>
				<Link to='article'>Team</Link>
				<Outlet />
			</div>
		</>
	);
};

export default MainPage;
