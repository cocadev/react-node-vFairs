import React from 'react';
import { authRoles } from 'app/auth';

const MaterialsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/materials',
			component: React.lazy(() => import('./Materials'))
		}
	]
};

export default MaterialsConfig;
