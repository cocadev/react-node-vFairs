import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as authActions from 'app/auth/store/actions';
import Formsy from 'formsy-react';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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

export default function LoginJWT(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth.login);
	const formRef = useRef(null);

	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({
				...login.error
			});
		}
	}, [login.error]);

	function handleSubmit(model) {
		dispatch(authActions.submitLogin(model));
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
					type="email"
					name="email"
					label="Email"
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
					aria-label="LOG IN"
				>
					Login
				</Button>
			</Formsy>
		</div>
	);
}
