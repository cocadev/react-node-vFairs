import React from 'react';
import { authRoles } from 'app/auth';

const JoinsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.school,
	routes: [
		{
			path: '/school/participants',
			component: React.lazy(() => import('./Joins'))
		}
	]
};

export default JoinsConfig;
