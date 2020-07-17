import _ from '@lodash';
import jwt from 'jsonwebtoken';
import * as base from 'app/env';
import mock from './mock';
/* eslint-disable camelcase */

const api = base.base_url;

var users = []; // eslint-disable-next-line
fetch(api + 'users').then(response => response.json()).then(data => data.map(row => {
	const data = {
		id: row.id,
		uuid: row.uuid,
		password: row.password,
		role: row.role,
		data: {
			displayName: row.name,
			photoURL: row.logo,
			email: row.email,
			settings: {
				layout: {
					style: 'layout1',
					config: {
						scroll: 'content',
						navbar: {
							display: true,
							folded: false,
							position: 'left'
						},
						mode: 'fullwidth'
					}
				},
				customScrollbars: true,
				theme: {
					main: 'legacy',
					navbar: 'mainThemeDark',
					toolbar: 'legacy',
					footer: 'default'
				}
			},
			shortcuts: []
		}
	};
	users.push(data);
}))

const authDB = {
	users: users
};

const jwtConfig = {
	secret: '|?af%fF<|?kiuartppasf%dfF<fF<^FDf42',
	expiresIn: 60 // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

mock.onGet('/api/auth').reply(config => {
	const data = JSON.parse(config.data);
	const { email, password } = data;

	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = {
		email: user ? null : 'Check your username/email',
		password: user && user.password === password ? null : 'Check your password'
	};

	if (!error.email && !error.password) {
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}

	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply(config => {
	const data = JSON.parse(config.data);
	const { access_token } = data;

	try {
		const { id } = jwt.verify(access_token, jwtConfig.secret);

		const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
		delete user.password;

		const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	} catch (e) {
		const error = 'Invalid access token detected';
		return [401, { error }];
	}
});

mock.onPost('/api/auth/user/update').reply(config => {
	const data = JSON.parse(config.data);
	const { user } = data;

	authDB.users = authDB.users.map(_user => {
		if (user.uuid === user.id) {
			return _.merge(_user, user);
		}
		return _user;
	});

	return [200, user];
});
