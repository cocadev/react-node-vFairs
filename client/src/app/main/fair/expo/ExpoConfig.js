import React from 'react';

const ExpoConfig = {
	settings: {
		layout: {
			style: 'layout2',
			config: {
				scroll: 'content',
				navbar: {
					display: true,
					folded: false,
					position: 'top'
				},
				mode: 'fullwidth'
			}
		},
	},
	routes: [
		{
			path: '/fair/expo',
			component: React.lazy(() => import('./Expo'))
		}
	]
};

export default ExpoConfig;
