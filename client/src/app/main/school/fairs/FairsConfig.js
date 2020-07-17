import React from 'react';
import { authRoles } from 'app/auth';

const FairsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.school,
	routes: [
		{
			path: '/school/vfairs',
			component: React.lazy(() => import('./Fairs'))
		}
	]
};

export default FairsConfig;
