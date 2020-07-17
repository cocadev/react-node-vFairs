import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import fairConfigs from 'app/main/fair/fairConfigs';
import adminConfigs from 'app/main/admin/adminConfigs';
import universityConfigs from 'app/main/university/universityConfigs';
import schoolConfigs from 'app/main/school/schoolConfigs';
import representativeConfigs from 'app/main/reps/representativeConfigs';
import studentConfigs from 'app/main/student/studentConfigs';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordConfig';

const routeConfigs = [
	...fairConfigs,
	...adminConfigs,
	...universityConfigs,
	...schoolConfigs,
	...representativeConfigs,
	...studentConfigs,
	...pagesConfigs,
	LoginConfig,
	LogoutConfig,
	RegisterConfig,
	ForgotPasswordConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/fair/expo" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
