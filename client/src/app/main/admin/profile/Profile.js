import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import * as base from 'app/env';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
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
	button: {
		width: 200,
		background: '#505050',
		color: '#fff',
		'&:hover': {
			background: '#303030',
			color: '#fff'
		}
	},
	form_button: {
		background: '#505050',
		color: '#fff',
		'&:hover': {
			background: '#303030',
			color: '#fff'
		}
	},
	logo: {
		width: 89,
		height: 89,
		margin: '0 1.2rem 1.2rem 0'
	},
	message: {
		color: '#fff',
		backgroundColor: '#1E2125',
		position: 'absolute',
		left: 0,
		top: '-95vh'
	},
	logo_upload: {
		width: '100%'
	},
	logo_button: {
		width: 'auto',
		background: '#505050',
		color: '#fff',
		textTransform: 'none',
		'&:hover': {
			background: '#303030',
			color: '#fff',
			textTransform: 'none'
		}
	},
	paper: {
		outline: 'none',
		backgroundColor: '#f7f7f7'
	}
}));

export default function Profile() {
	const [message, setMessage] = useState(false);
	const [editing, setEditing] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [logo, setLogo] = useState('');
	const [phone, setPhone] = useState('');

	const api = base.base_url;

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'users/get').then(res => res.json()).then(results => { results.map(row => {
			setLogo(row.logo);
			setEmail(row.email);
			setPhone(row.phone);
			setName(row.name);
		})});
	});

	const	handleUpload = (e) => {
		const file = e.target.files[0];
		if (!file) { return; }

		const reader = new FileReader();

		reader.readAsBinaryString(file);

		reader.onload = () => {
			const src = `data:${file.type};base64,${btoa(reader.result)}`;
			fetch(api + 'updateLogo', { method: 'PUT', body: '{"logo": "' + src + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
			setLogo(src);
		};

		reader.onerror = function () {};
	};

	const hideMessage = () => {
		setMessage(false);
	};

	const handleEditing = () => {
		setEditing(true);
	};

	const handleClose = () => {
		setEditing(false);
	};

	const formRef = useRef(null);

	function handleSubmit(model) {
		fetch(api + 'updateStudent', { method: 'PUT', body: '{"name": "' + model.displayName + '", "pass": "' + model.password + '", "ph": "' + model.phone + '", "email": "' + model.email + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())

		setMessage(true);
		setEditing(false);
	}

	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pt-48 px-24 w-full flex">
					{message &&
						<Snackbar
							open={true}
							onClose={hideMessage}
							ContentProps={{
								variant: 'body2',
								headlineMapping: {
									body1: 'div',
									body2: 'div'
								}
							}}
						>
							<SnackbarContent
								className={classes.message}
								message={
									<div className="flex items-center">
										<Typography className="mx-8">Profile changes saved.</Typography>
									</div>
								}
								action={[
									<IconButton
										key="close"
										aria-label="Close"
										color="inherit"
										onClick={hideMessage}
									>
										<Icon>close</Icon>
									</IconButton>
								]}
							/>
						</Snackbar>
					}
					<div className="w-full">
						<h1 className="text-48">Welcome, {name}</h1>
					</div>
					<div className="pt-48">
						<Button type="button" className={clsx(classes.button, 'normal-case')} variant="contained" onClick={handleEditing}>
							Edit Profile
						</Button>
					</div>
				</div>
			}
			content={
				<div className="p-24">
					{editing &&
						<Modal className={classes.modal} open={true} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
							<Fade in={true}>
								<Paper className={clsx(classes.paper, 'w-full')}>
									<Typography className="mx-auto py-16 text-center block w-full text-32 border-b-1">Edit Profile</Typography>
									<Formsy
										onValidSubmit={handleSubmit}
										ref={formRef}
										className="flex flex-col justify-center w-full p-16"
									>
										<div className="flex">
											<img src={logo} alt="University Logo" className={classes.logo} />
											<input accept="image/*" className="hidden" id="button-file" type="file" onChange={handleUpload} />
											<label htmlFor="button-file" className={classes.logo_upload}>
												<Button variant="contained" className={classes.logo_button} component="span">
													<Icon>add_photo_alternate</Icon>
												</Button>
											</label>
										</div>

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
					<div className="md:flex w-full">
						<div className="flex flex-col flex-1">
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideUpBigIn'
								}}
							>
								<Card className="w-full mb-16">
									<AppBar position="static" elevation={0}>
										<Toolbar className="px-8">
											<Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
												General Information
											</Typography>
										</Toolbar>
									</AppBar>

									<CardContent>
										<div className="mb-24">
											<img src={logo} alt="University Logo" className={classes.logo} />
											<Typography className="font-bold mb-4 text-15">Name</Typography>
											<Typography>{name}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Email</Typography>
											<Typography>{email}</Typography>
										</div>

										<div className="mb-24">
											<Typography className="font-bold mb-4 text-15">Phone</Typography>
											<Typography>{phone}</Typography>
										</div>
									</CardContent>
								</Card>
							</FuseAnimateGroup>
						</div>
					</div>
				</div>
			}
		/>

	);
}
