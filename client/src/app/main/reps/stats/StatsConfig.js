import React from 'react';
import { authRoles } from 'app/auth';

const StatsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.representative,
	routes: [
		{
			path: '/representative/stats',
			component: React.lazy(() => import('./Stats'))
		}
	]
};

export default StatsConfig;
