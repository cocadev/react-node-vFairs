import React from 'react';
import { authRoles } from 'app/auth';

const GraphicsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/graphics',
			component: React.lazy(() => import('./Graphics'))
		}
	]
};

export default GraphicsConfig;
