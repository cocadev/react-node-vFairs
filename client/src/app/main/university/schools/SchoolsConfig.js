import React from 'react';
import { authRoles } from 'app/auth';

const SchoolsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/schools',
			component: React.lazy(() => import('./Schools'))
		}
	]
};

export default SchoolsConfig;
