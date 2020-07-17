import React from 'react';
import { authRoles } from 'app/auth';

const PublishConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/publish',
			component: React.lazy(() => import('./Publish'))
		}
	]
};

export default PublishConfig;
