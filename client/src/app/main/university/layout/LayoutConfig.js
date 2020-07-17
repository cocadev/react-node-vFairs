import React from 'react';
import { authRoles } from 'app/auth';

const LayoutConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/layout',
			component: React.lazy(() => import('./Layout'))
		}
	]
};

export default LayoutConfig;
