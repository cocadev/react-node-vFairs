import React from 'react';
import { authRoles } from 'app/auth';

const InfoConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/info',
			component: React.lazy(() => import('./Info'))
		}
	]
};

export default InfoConfig;
