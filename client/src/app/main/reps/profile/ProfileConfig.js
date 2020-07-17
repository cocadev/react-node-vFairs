import React from 'react';
import { authRoles } from 'app/auth';

const ProfileConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.representative,
	routes: [
		{
			path: '/representative/profile',
			component: React.lazy(() => import('./Profile'))
		}
	]
};

export default ProfileConfig;
