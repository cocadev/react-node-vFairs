import React, { useState, useRef, useEffect } from 'react';
import FuseUtils from '@fuse/utils';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import history from '@history';
import { Link } from 'react-router-dom';
import Additional from './Additional';
import { makeStyles } from '@material-ui/core/styles';
import jwtService from 'app/services/jwtService';
import * as base from 'app/env';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		width: '100%',
		height: '750px',
		textAlign: 'center',
		paddingTop: '6rem',
		backgroundImage: 'url("assets/images/fair/booth-bg.jpg")',
		backgroundSize: '100% 70%',
		backgroundRepeat: 'no-repeat',
		display: 'block'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '75vw',
		height: 'fit-content',
		border: 0,
		borderRadius: '8px',
		boxShadow: theme.shadows[5],
		margin: 'auto'
	},
	booth: {
		display: 'block',
		position: 'relative',
		margin: 'auto',
		width: '1000px',
		height: '382.17px'
	},
  booth_image: {
		width: '1000px',
    height: '382.17px'
  },
	booth_banner: {
		position: 'absolute',
		'& > img': {
			width: '100%',
			height: '100%'
		}
	},
	booth_banner_standing: {
		width: '75px',
    height: '190px',
		top: '155px'
	},
  booth_banner01: {
		width: '222px',
    height: '124px',
    top: '64px',
    left: '382px'
  },
  booth_banner02: {
    left: '62px'
  },
  booth_banner03: {
    left: '170px'
  },
  booth_banner04: {
    left: '748px'
  },
  booth_banner05: {
    left: '858px'
  },
	back_link: {
		position: 'absolute',
    top: '2.4rem',
    left: '2.4rem'
	},
	links: {
		backgroundColor: '#505050',
		marginTop: '40px',
		display: 'block',
		width: '100%',
		textAlign: 'start',
		position: 'relative'
	},
	link: {
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	apply_link: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	button: {
		width: '160px',
		minWidth: '160px',
		maxWidth: '160px',
		background: '#505050',
		boxShadow: 'none',
		padding: '2.2rem',
		borderRadius: 0,
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
			boxShadow: 'none'
		}
	},
	form_button: {
		background: '#505050',
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff'
		}
	},
	apply_button: {
		background: '#039be5',
		boxShadow: 'none',
		padding: '2.2rem',
		borderRadius: 0,
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
			boxShadow: 'none'
		}
	},
	back_button: {
		background: '#fff',
		color: '#039be5',
		'&:hover': {
			background: '#fff',
			color: '#039be5'
		}
	},
	paper: {
		outline: 'none',
		backgroundColor: '#f7f7f7'
	}
}));

export default function Booths() {
	const [open, setOpen] = useState(false);
	const [registered, setRegistered] = useState(false);
	const [logo, setLogo] = useState('');
	const [name, setName] = useState('');

	const role = jwtService.getUserRole();

	const api = base.base_url;

	const formRef = useRef(null);

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'users/get').then(res => res.json()).then(results => { results.map(row => {
			setLogo(row.logo);
			setName(row.name);
		})});

		if (role !== "guest") {
			setRegistered(true);
		}
	}, [api, role]);

	const handleSubmit = (model) => {
		fetch(api + 'registerUser', { method: 'POST', body: '{"uuid": "' + FuseUtils.generateGUID() + '", "name": "' + model.displayName + '", "pass": "' + model.password + '", "ph": "' + model.phone + '", "email": "' + model.email + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
		fetch(api + 'registerStudent', { method: 'POST', body: '{"name": "' + model.displayName + '", "email": "' + model.email + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())

		history.push({
			pathname: '/login'
		});
	};

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	const classes = useStyles();

	return (
		<div className={classes.container}>
		{open &&
			<Modal className={classes.modal} open={true} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
				<Fade in={true}>
					<Paper className={clsx(classes.paper, 'w-full')}>
						<Formsy
							onValidSubmit={handleSubmit}
							ref={formRef}
							className="flex flex-col justify-center w-full p-16"
						>
							<TextFieldFormsy
								className={clsx(classes.input, 'mb-16')}
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
								variant="filled"
								required
							/>

							<TextFieldFormsy
								className={clsx(classes.input, 'mb-16')}
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
								variant="filled"
								required
							/>

							<TextFieldFormsy
								className={clsx(classes.input, 'mb-16')}
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
								variant="filled"
								required
							/>

							<TextFieldFormsy
								className={clsx(classes.input, 'mb-16')}
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
								variant="filled"
								required
							/>

							<TextFieldFormsy
								className={clsx(classes.input, 'mb-16')}
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
								variant="filled"
								required
							/>

							<Button type="submit" variant="contained" className={clsx(classes.form_button, 'w-full mx-auto mt-16 normal-case')} aria-label="REGISTER">
								Register
							</Button>
						</Formsy>
					</Paper>
				</Fade>
			</Modal>
		}
			<div className={classes.booth}>

			</div>
			<div className={classes.links}>
				<Link className={classes.link} to="/">
					<Button type="button" variant="contained" className={clsx(classes.button, 'normal-case')}>
						Link Sample
					</Button>
				</Link>
				<div className={classes.apply_link}>
					<Button type="button" variant="contained" className={clsx(classes.apply_button, 'normal-case')} onClick={handleClick}>
						Apply Here
					</Button>
				</div>
			</div>
			<Additional />
			<Link className={clsx(classes.link, classes.back_link)} to="/fair/hall">
				<Button type="button" variant="contained" className={clsx(classes.back_button, 'normal-case')}>
					Back to Hall
				</Button>
			</Link>
		</div>
	);
}
