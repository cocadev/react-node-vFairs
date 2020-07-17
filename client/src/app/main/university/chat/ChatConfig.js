import React from 'react';
import { authRoles } from 'app/auth';

const ChatConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.university,
	routes: [
		{
			path: '/university/chat',
			component: React.lazy(() => import('./Chat'))
		}
	]
};

export default ChatConfig;
