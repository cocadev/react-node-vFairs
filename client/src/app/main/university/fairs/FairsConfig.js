import React from 'react';
import { authRoles } from 'app/auth';

const FairsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/vfairs',
			component: React.lazy(() => import('./Fairs'))
		}
	]
};

export default FairsConfig;
