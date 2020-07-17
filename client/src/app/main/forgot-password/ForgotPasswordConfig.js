import React from 'react';
import { authRoles } from 'app/auth';

const ForgotPasswordConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.guest,
	routes: [
		{
			path: '/forgot-password',
			component: React.lazy(() => import('./ForgotPassword'))
		}
	]
};

export default ForgotPasswordConfig;
