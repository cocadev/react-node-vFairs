import React from 'react';
import { authRoles } from 'app/auth';

const ColorsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/colors',
			component: React.lazy(() => import('./Colors'))
		}
	]
};

export default ColorsConfig;
