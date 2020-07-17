import React from 'react';
import { authRoles } from 'app/auth';
import store from 'app/store';
import Hall from 'app/main/fair/hall/Hall';
import { logoutUser } from 'app/auth/store/actions';

const LogoutConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.guest,
	routes: [
		{
			path: '/logout',
			component: () => {
				store.dispatch(logoutUser());
				return <Hall />;
			}
		}
	]
};

export default LogoutConfig;
