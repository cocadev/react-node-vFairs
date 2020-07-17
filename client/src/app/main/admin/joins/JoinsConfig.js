import React from 'react';
import { authRoles } from 'app/auth';

const JoinsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/participants',
			component: React.lazy(() => import('./Joins'))
		}
	]
};

export default JoinsConfig;
