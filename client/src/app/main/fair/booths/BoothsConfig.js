import React from 'react';

const BoothsConfig = {
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
			path: '/fair/booths',
			component: React.lazy(() => import('./Booths'))
		}
	]
};

export default BoothsConfig;
