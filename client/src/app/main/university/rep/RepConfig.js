import React from 'react';
import { authRoles } from 'app/auth';

const RepConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/users',
			component: React.lazy(() => import('./Rep'))
		}
	]
};

export default RepConfig;
