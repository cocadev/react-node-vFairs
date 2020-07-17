import React from 'react';
import { authRoles } from 'app/auth';

const ChatConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.representative,
	routes: [
		{
			path: '/representative/chat',
			component: React.lazy(() => import('./Chat'))
		}
	]
};

export default ChatConfig;
