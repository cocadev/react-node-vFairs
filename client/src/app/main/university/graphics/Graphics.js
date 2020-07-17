import React, { useState, useEffect, useRef } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { TextFieldFormsy } from '@fuse/core/formsy';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import Icon from '@material-ui/core/Icon';
import * as base from 'app/env';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		width: '100%',
		height: '750px',
		textAlign: 'center',
		paddingTop: '6rem',
		display: 'block'
	},
	booth: {
		display: 'block',
		position: 'relative',
		margin: 'auto',
		width: '1000px',
		height: '382.17px'
	},
  booth_image: {
		width: 1000,
    height: '382.17px'
  },
	booth_banner: {
		position: 'absolute',
		'&:hover': {
			cursor: 'pointer'
		},
		'& > img': {
			width: '100%',
			height: '100%'
		}
	},
	booth_banner_standing: {
		top: 52,
    width: 130,
    height: '244.2px'
	},
  booth_banner10: {
		top: 74,
    left: 620,
    width: 227,
    height: 93
	},
  booth_banner11: { left: 162 },
  booth_banner12: { left: 318 },
  booth_banner13: { left: 475 },
	link: {
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	button: {
		width: 100,
		background: '#039be5',
		color: '#fff',
		margin: '0 1.2rem',
		'&:hover': {
			background: '#039be5',
			color: '#fff'
		}
	},
	message: {
	  color: '#fff',
	  backgroundColor: '#1E2125',
	  position: 'absolute',
		left: 0,
	  top: '-95vh'
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
	paper: {
		outline: 'none',
		backgroundColor: '#f7f7f7'
	}
}));

export default function Graphics() {
	const [tv, setTV] = useState('assets/images/fair/banners/placeholder.png');
	const [openTVLnk, setOpenTVLnk] = useState(false);
	const [tvLnk, setTVLnk] = useState('/');
	const [banner1, setBanner1] = useState('assets/images/fair/banners/placeholder.png');
	const [banner2, setBanner2] = useState('assets/images/fair/banners/placeholder.png');
	const [banner3, setBanner3] = useState('assets/images/fair/banners/placeholder.png');
	const [banner1Lnk, setBanner1Lnk] = useState('/');
	const [banner2Lnk, setBanner2Lnk] = useState('/');
	const [banner3Lnk, setBanner3Lnk] = useState('/');
	const [message, setMessage] = useState(false);
	const [warning, setWarning] = useState(false);
	const [color, setColor] = useState('1');
	const [layout, setLayout] = useState('1');

	const api = base.base_url;

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'booth/get').then(res => res.json()).then(results => { results.map(row => {
			setLayout(row.layout);
			setColor(row.color);

			if (layout === '0') {
				setWarning(true);
			}
		})});
	});

	const src = 'assets/images/fair/booths/' + layout + '/' + color  + '.png';

	const classes = useStyles();

	const handleSubmit = () => {
		fetch(api + 'booth/graphics/set', { method: 'PUT', body: '{"tv": "' + tv + '", "tvLnk": "' + tvLnk + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())

		setMessage(true);
	};

	const hideMessage = () => {
		setMessage(false);
	};

	const hideWarning = () => {
		setWarning(false);
	};

	const formRefTVlnk = useRef(null);

	const	handleUploadTV = (e) => {
		const file = e.target.files[0];
		if (!file) { return; }
		const reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = () => {
			const src = `data:${file.type};base64,${btoa(reader.result)}`;
			setTV(src);
			setOpenTVLnk(true);
		};
		reader.onerror = function () {};
	};

	const	handleUpload01 = (e) => {
		const file = e.target.files[0];
		if (!file) { return; }
		const reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = () => {
			const src = `data:${file.type};base64,${btoa(reader.result)}`;
			setBanner1(src);
		};
		reader.onerror = function () {};
	};

	const	handleUpload02 = (e) => {
		const file = e.target.files[0];
		if (!file) { return; }
		const reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = () => {
			const src = `data:${file.type};base64,${btoa(reader.result)}`;
			setBanner2(src);
		};
		reader.onerror = function () {};
	};

	const	handleUpload03 = (e) => {
		const file = e.target.files[0];
		if (!file) { return; }
		const reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = () => {
			const src = `data:${file.type};base64,${btoa(reader.result)}`;
			setBanner3(src);
		};
		reader.onerror = function () {};
	};

	const handleSubmitTVLnk = (model) => { setTVLnk(model.tvlink); };
	const handleCloseTVLnk = () => { setOpenTVLnk(false); };

	return (
		<FusePageSimple
			classes={{
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pt-48 pl-24">
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
										<Typography className="mx-8">Banners successfully uploaded.</Typography>
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
					{warning &&
						<Snackbar
							open={true}
							onClose={hideWarning}
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
										<Typography className="mx-8">Your layout and/or color settings is incorrect, please go back and save those.</Typography>
									</div>
								}
								action={[
									<IconButton
										key="close"
										aria-label="Close"
										color="inherit"
										onClick={hideWarning}
									>
										<Icon>close</Icon>
									</IconButton>
								]}
							/>
						</Snackbar>
					}
					<h1 className="text-48">Banners Setup</h1>
				</div>
			}
			content={
				<div className="p-24">
					<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
						<div className={classes.container}>
							{layout === '1' &&
							<div className={classes.booth}>
								<Typography className="w-full block mx-auto my-16 text-center text-24">
									Click on banner / TV to upload your graphics and set their links.<br></br>
									<small>Best fitting sizes | TV - Width: 227px Height: 93px | Banners - Width: 130px Height: 93px</small>
								</Typography>

								<img className={classes.booth_image} src={src} alt="Booth" />

								<input accept="image/*" className="hidden" id="tv" type="file" onChange={handleUploadTV} />
								<label htmlFor="tv">
									<img className={clsx(classes.booth_banner10, classes.booth_banner)} src={tv} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner1" type="file" onChange={handleUpload01} />
								<label htmlFor="banner1">
									<img className={clsx(classes.booth_banner11, classes.booth_banner, classes.booth_banner_standing)} src={banner1} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner2" type="file" onChange={handleUpload02} />
								<label htmlFor="banner2">
									<img className={clsx(classes.booth_banner12, classes.booth_banner, classes.booth_banner_standing)} src={banner2} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner3" type="file" onChange={handleUpload03} />
								<label htmlFor="banner3">
									<img className={clsx(classes.booth_banner13, classes.booth_banner, classes.booth_banner_standing)} src={banner3} alt="Banner" />
								</label>
							</div>
							}
							{layout === '2' &&
							<div className={classes.booth}>
								<Typography className="w-full block mx-auto my-16 text-center text-24">
									Click on banner / TV to upload your graphics and set their links.<br></br>
									<small>Best fitting sizes | TV - Width: 227px Height: 93px | Banners - Width: 130px Height: 93px</small>
								</Typography>
								
								<img className={classes.booth_image} src={src} alt="Booth" />

								<input accept="image/*" className="hidden" id="tv" type="file" onChange={handleUploadTV} />
								<label htmlFor="tv">
									<img className={clsx(classes.booth_banner10, classes.booth_banner)} src={tv} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner1" type="file" onChange={handleUpload01} />
								<label htmlFor="banner1">
									<img className={clsx(classes.booth_banner11, classes.booth_banner, classes.booth_banner_standing)} src={banner1} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner2" type="file" onChange={handleUpload02} />
								<label htmlFor="banner2">
									<img className={clsx(classes.booth_banner12, classes.booth_banner, classes.booth_banner_standing)} src={banner2} alt="Banner" />
								</label>

								<input accept="image/*" className="hidden" id="banner3" type="file" onChange={handleUpload03} />
								<label htmlFor="banner3">
									<img className={clsx(classes.booth_banner13, classes.booth_banner, classes.booth_banner_standing)} src={banner3} alt="Banner" />
								</label>
							</div>
							}
							{openTVLnk &&
								<Modal className={classes.modal} open={true} onClose={handleCloseTVLnk} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
									<Fade in={true}>
										<Paper className={clsx(classes.paper, 'w-full')}>
											<Formsy
												onValidSubmit={handleSubmitTVLnk}
												ref={formRefTVlnk}
												className="flex flex-col justify-center w-full mt-16 p-16"
											>
												<TextFieldFormsy
													className="mb-16"
													type="text"
													name="tvlink"
													label="TV Link"
													InputProps={{
														endAdornment: (
															<InputAdornment position="end">
																<Icon className="text-20" color="action">
																	insert_link
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
													aria-label="Add link"
												>
													Add link
												</Button>
											</Formsy>
											</Paper>
										</Fade>
									</Modal>
								}
							<div className="block m-auto text-center mt-24">
								<Button type="submit" variant="contained" className={clsx(classes.button, 'normal-case')} onClick={handleSubmit}>
									Save
								</Button>
								<Link className={classes.link} to="/university/links">
									<Button type="button" variant="contained" className={clsx(classes.button, 'normal-case')}>
										Next
									</Button>
								</Link>
							</div>
						</div>
					</FuseAnimateGroup>
				</div>
			}
			innerScroll
		/>
	);
}
