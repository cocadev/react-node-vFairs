import React from 'react';
import { authRoles } from 'app/auth';

const StatisticsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/admin/statistics',
			component: React.lazy(() => import('./Statistics'))
		}
	]
};

export default StatisticsConfig;
