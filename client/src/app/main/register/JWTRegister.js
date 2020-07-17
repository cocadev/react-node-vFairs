import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as base from 'app/env';
import history from '@history';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	button: {
		background: '#039be5',
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff'
		}
	}
}));

function JWTRegister(props) {
	const classes = useStyles();

	const api = base.base_url;

	const formRef = useRef(null);

	function handleSubmit(model) {
		fetch(api + 'registerUser', { method: 'POST', body: '{"uuid": "' + FuseUtils.generateGUID() + '", "name": "' + model.displayName + '", "pass": "' + model.password + '", "ph": "' + model.phone + '", "email": "' + model.email + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
		fetch(api + 'registerStudent', { method: 'POST', body: '{"name": "' + model.displayName + '", "email": "' + model.email + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())

		history.push({
			pathname: '/login'
		});
	}

	return (
		<div className="w-full">
			<Formsy
				onValidSubmit={handleSubmit}
				ref={formRef}
				className="flex flex-col justify-center w-full"
			>
				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="displayName"
					label="Full Name"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									person
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="text"
					name="phone"
					label="Phone"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									phone_android
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="email"
					name="email"
					label="Email"
					validations="isEmail"
					validationErrors={{
						isEmail: 'Please enter a valid email'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password"
					label="Password"
					validations="equalsField:password-confirm"
					validationErrors={{
						equalsField: 'Passwords do not match'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<TextFieldFormsy
					className="mb-16"
					type="password"
					name="password-confirm"
					label="Confirm Password"
					validations="equalsField:password"
					validationErrors={{
						equalsField: 'Passwords do not match'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									vpn_key
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					required
				/>

				<Button
					type="submit"
					variant="contained"
					className={clsx(classes.button, 'w-full mx-auto mt-16 normal-case')}
					aria-label="REGISTER"
					value="legacy"
				>
					Register
				</Button>
			</Formsy>
		</div>
	);
}

export default JWTRegister;
