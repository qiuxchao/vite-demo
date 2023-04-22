import { createBrowserRouter } from 'react-router-dom';

import About from './pages/about.jsx';
import Home from './pages/home.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/about',
		Component: About,
	},
]);

export default router;
