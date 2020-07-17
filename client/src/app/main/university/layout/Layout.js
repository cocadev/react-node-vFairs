import React, { useState, useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import * as base from 'app/env';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	booth_image: {
		width: 600,
		height: 273,
		padding: '1rem',
		cursor: 'pointer'
	},
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
		display: 'inline-block',
		textTransform: 'none',
		'&:hover': {
			background: '#039be5',
			color: '#fff'
		}
	},
	border_around: {
		border: '5px dashed #d13838',
		borderRadius: 55
	},
	message: {
	  color: '#fff',
	  backgroundColor: '#1E2125',
	  position: 'absolute',
		left: 0,
	  top: '-95vh'
	}
}));

export default function Layout() {
	const classes = useStyles();
	const [message, setMessage] = useState(false);
	const [warning, setWarning] = useState(false);
	const [warningState, setWarningState] = useState(false);
	const [error, setError] = useState(false);
	const [previous, setPrevious] = useState('0');
	const [selected, setSelected] = useState('0');

	const url1 = 'assets/images/fair/booths/1/1.png';
	const url2 = 'assets/images/fair/booths/2/1.png';
	// const url3 = 'assets/images/fair/booths/3/1.png';
	// const url4 = 'assets/images/fair/booths/4/1.png';

	const api = base.base_url;

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'booth/get').then(res => res.json()).then(results => { results.map(row => {
			setPrevious(row.layout);
		})});
  });

  const handleChange = (event) => {
		setSelected(event.target.alt);
	};

	const handleSubmit = () => {
		if (previous !== selected  && previous !== '0') {
			if (warningState !== true) {
				setWarningState(true);
				setWarning(true);
			} else {
				fetch(api + 'booth/layout/set', { method: 'PUT', body: '{"layout": "' + selected + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
				fetch(api + 'booth/graphics/reset', { method: 'PUT', body: '{}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
				setMessage(true);
			}
		} else if (selected === '0') {
			setError(true);
		} else if (selected !== '0') {
			fetch(api + 'booth/layout/set', { method: 'PUT', body: '{"layout": "' + selected + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
			setMessage(true);
		}
	};

	const hideMessage = () => {
		setMessage(false);
	};

	const hideWarning = () => {
		setWarning(false);
	};

	const hideError = () => {
		setError(false);
	};

  return (
    <FusePageSimple
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
										<Typography className="mx-8">Layout choice saved.</Typography>
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
										<Typography className="mx-8">Changing Booth Layout will reset your banners. If you still want to do it click Save button again.</Typography>
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
					{error &&
						<Snackbar
							open={true}
							onClose={hideError}
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
										<Typography className="mx-8">You haven't selected any layout, please click on your choice.</Typography>
									</div>
								}
								action={[
									<IconButton
										key="close"
										aria-label="Close"
										color="inherit"
										onClick={hideError}
									>
										<Icon>close</Icon>
									</IconButton>
								]}
							/>
						</Snackbar>
					}
          <h1 className="text-48">Booth Layout Choice</h1>
        </div>
      }
      content={
				<div className="w-full">
					<div className="p-24">
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<div className="widget flex w-full sm:w-1/2 md:w-1/2 mb-24">
								<img className={clsx(classes.booth_image, (selected === '1') ? classes.border_around : null)} src={url1} onClick={handleChange} alt={1} />
							</div>
							<div className="widget flex w-full sm:w-1/2 md:w-1/2 mb-24">
								<img className={clsx(classes.booth_image, (selected === '2') ? classes.border_around : null)} src={url2} onClick={handleChange} alt={2} />
							</div>
						</FuseAnimateGroup>
						<div className="block m-auto text-center">
							<Button type="submit" variant="contained" className={classes.button} onClick={handleSubmit}>
								Save
							</Button>
							<Link className={classes.link} to="/university/colors">
								<Button type="button" variant="contained" className={classes.button}>
									Next
								</Button>
							</Link>
						</div>
					</div>
				</div>
      }
      innerScroll
    />
  );
}
