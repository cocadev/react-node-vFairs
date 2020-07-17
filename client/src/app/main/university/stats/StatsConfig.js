import React from 'react';
import { authRoles } from 'app/auth';

const StatsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/stats',
			component: React.lazy(() => import('./Stats'))
		}
	]
};

export default StatsConfig;
