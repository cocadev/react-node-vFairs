import React from 'react';
import { authRoles } from 'app/auth';

const ProfileConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.school,
	routes: [
		{
			path: '/school/profile',
			component: React.lazy(() => import('./Profile'))
		}
	]
};

export default ProfileConfig;
