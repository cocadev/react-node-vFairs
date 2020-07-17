import React from 'react';

const HallConfig = {
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
			path: '/fair/hall',
			component: React.lazy(() => import('./Hall'))
		}
	]
};

export default HallConfig;
