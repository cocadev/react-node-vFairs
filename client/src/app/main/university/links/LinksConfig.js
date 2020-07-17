import React from 'react';
import { authRoles } from 'app/auth';

const LinksConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/links',
			component: React.lazy(() => import('./Links'))
		}
	]
};

export default LinksConfig;
