import React, { useState, useRef, useEffect } from "react";
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Formsy from 'formsy-react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import * as base from 'app/env';
import { TextFieldFormsy, FuseChipSelectFormsy } from '@fuse/core/formsy';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	button: {
		width: 100,
		background: '#039be5',
		color: '#fff',
		textTransform: 'none',
		margin: '0 1.2rem',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
			textTransform: 'none'
		}
	},
	link: {
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	logo: {
	  width: 89,
	  height: 89
	},
	message: {
		color: '#fff',
		backgroundColor: '#1E2125',
		position: 'absolute',
		left: 0,
		top: '-95vh'
	},
	logo_upload: {
  	marginLeft: '1.2rem',
  	width: '100%'
	},
	logo_button: {
		width: 'auto',
		background: '#039be5',
		color: '#fff',
		textTransform: 'none',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
			textTransform: 'none'
		}
	}
});

export default function Info() {
	const [name, setName] = useState('Please type in University name here...');
	const [logo, setLogo] = useState('assets/images/avatars/profile.jpg');
	const [email, setEmail] = useState('Please type in University email here...');
	const [phone, setPhone] = useState('Please type in University main phone number here...');
	const [address, setAddress] = useState('Please type in University address here...');
	const [destination, setDestination] = useState('Please type in study destination here...');
	const [content, setContent] = useState('');
	const [programs, setPrograms] = useState('');
	const [message, setMessage] = useState(false);
	const [logoMessage, setLogoMessage] = useState(false);

	const classes = useStyles();

	const api = base.base_url;
	const specs = [];

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'users/get').then(res => res.json()).then(results => { results.map(row => {
			setName(row.name);
			setLogo(row.logo);
			setEmail(row.email);
			setPhone(row.phone);
			setAddress(row.address);
			setDestination(row.destination);
			setContent(row.description);
			setPrograms(row.programs);
		})});

		// eslint-disable-next-line
		fetch(api + 'booth/programs/get').then(res => res.json()).then(results => { results.map(row => {
			var data = {
				value: row.id,
				label: row.spec_name
			};

			specs.push(data);
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

	const handleSubmit = (model) => {
		fetch(api + 'university/updateInfo', { method: 'PUT', body: '{"name": "' + model.name + '", "email": "' + model.email + '", "phone": "' + model.phone + '", "address": "' + model.address + '", "dest": "' + model.destination + '", "programs": "' + model.programs + '", "description": "' + content + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
		setMessage(true);
	};

	const handleChange = (event) => {
    setContent(event.target.value);
  };

	const hideMessage = () => {
		setMessage(false);
		setLogoMessage(false);
	};

	const formRef = useRef(null);

	return (
		<FusePageSimple
			classes={{
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pt-48 pl-24">
					{logoMessage &&
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
										<Typography className="mx-8">Logo successfully changed.</Typography>
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
										<Typography className="mx-8">Data saved.</Typography>
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
					<h1 className="text-48">University Information</h1>
				</div>
			}
			content={
				<div className="w-full">
					<div className="p-24">
						<Formsy	onValidSubmit={handleSubmit} ref={formRef}>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-12">
									<h2 className="text-24 mb-16">Please provide your Information.</h2>
									<div className="flex">
										<img src={logo} alt="University Logo" className={classes.logo} />
										<input accept="image/*" className="hidden" id="button-file" type="file" onChange={handleUpload} />
										<label htmlFor="button-file" className={classes.logo_upload}>
											<Button variant="contained" className={classes.logo_button} component="span">
												<Icon>add_photo_alternate</Icon>
											</Button>
										</label>
									</div>
									<TextFieldFormsy className="my-16" type="text" name="name" label="Name" placeholder={name} required />
									<TextFieldFormsy className="mb-16" type="text" name="email" label="Email" placeholder={email} required />
									<TextFieldFormsy className="mb-16" type="text" name="phone" label="Phone Number" placeholder={phone} required />
									<TextFieldFormsy className="mb-16" type="text" name="address" label="Full address" placeholder={address} required />
									<TextFieldFormsy className="mb-16" type="text" name="destination" label="Study destination" placeholder={destination} required />
									<FuseChipSelectFormsy
                    className="mb-16"
                    name="programs"
                    placeholder={programs}
                    textFieldProps={{
                        label          : 'Programs and Courses',
                        InputLabelProps: {
                            shrink: true
                        },
                        variant        : 'standard'
                    }}
                    options={specs}
                    isMulti
                    validations={{ minLength: 1 }}
                    validationErrors={{
                        minLength: 'You need to select at least one.'
                    }}
                    required
                />
								</div>
								<div className="flex flex-col w-full sm:w-1/2 md:w-1/2 px-12">
									<h2 className="text-24 mb-16">Edit the visible description here below.</h2>
									<Editor
										init={{
											height: 500,
											menubar: true,
											plugins: [
												'advlist autolink lists link image charmap print preview anchor',
												'searchreplace visualblocks code fullscreen',
												'insertdatetime media table paste code help wordcount'
											],
											toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
										}}
										apiKey='7zn4zyodskwv117vi0e1m767pcfwbqdbs67wtinmcgw46r1e'
										cloudChannel='5-stable'
										value={content}
										textareaName='description'
										onEditorChange={handleChange}
									/>
								</div>
							</FuseAnimateGroup>
							<div className="block m-auto text-center mt-24">
								<Button type="submit" variant="contained" className={classes.button}>
									Save
								</Button>
								<Link className={classes.link} to="/university/layout">
									<Button type="button" variant="contained" className={classes.button}>
										Next
									</Button>
								</Link>
							</div>
						</Formsy>
					</div>
				</div>
			}
			innerScroll
		/>
	);
}
