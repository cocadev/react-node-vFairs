import React from 'react';
import { authRoles } from 'app/auth';

const HallConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/hall',
			component: React.lazy(() => import('./Hall'))
		}
	]
};

export default HallConfig;
