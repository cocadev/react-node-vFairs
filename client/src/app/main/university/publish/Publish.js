import React, { useState, useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import * as base from 'app/env';
import clsx from 'clsx';

const useStyles = makeStyles({
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
	message: {
		color: '#fff',
		backgroundColor: '#1E2125',
		position: 'absolute',
		left: 0,
		top: '-95vh'
	},
	button: {
		width: '100px',
		background: '#039be5',
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
		}
	}
});

export default function Publish() {
	const [tv, setTV] = useState('0');
	const [tvLnk, setTVLnk] = useState('0');
	const [banner1, setBanner1] = useState('1');
	const [banner2, setBanner2] = useState('1');
	const [banner3, setBanner3] = useState('1');
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

		// eslint-disable-next-line
		fetch(api + 'booth/graphics/get').then(res => res.json()).then(results => { results.map(row => {
			setTVLnk(row.tvLnk);
			setTV(row.tv);

			if (layout === '1') {
				if (tv === '0' || tvLnk === '0' || banner1 === '0' || banner2 === '0' || banner3 === '0' || banner1Lnk === '0' || banner2Lnk === '0' || banner3Lnk === '0') {
					setWarning(true);
				}
			} else if (layout === '2') {

			} else if (layout === '3') {

			} else if (layout === '4') {

			}
		})});
	});

	const src = 'assets/images/fair/booths/' + layout + '/' + color  + '.png';

	const classes = useStyles();

	const handleSubmit = () => {
		fetch(api + 'booth/publish/set', { method: 'PUT', body: '{}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
		fetch(api + 'booth/publish/setUser', { method: 'PUT', body: '{}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
		setMessage(true);
	};

	const hideMessage = () => {
		setMessage(false);
	};

	const hideWarning = () => {
		setWarning(false);
	};

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
									<Typography className="mx-8">You booth is ready and it will soon be placed in the Fair Hall!</Typography>
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
									<Typography className="mx-8">Somethings wrong with you setup, please go back and save everything.</Typography>
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
					<h1 className="text-48">Review and Publish your Booth!</h1>
				</div>
			}
			content={
				<div className="p-24">
					<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
						<div className={classes.container}>
							{layout === '1' &&
							<div className={classes.booth}>
								<img className={classes.booth_image} src={src} alt="Booth" />
								<Link className={clsx(classes.booth_banner10, classes.booth_banner)} to={tvLnk} target="_blank" rel="noopenner"><img src={tv} alt="Banner" /></Link>
								<Link className={clsx(classes.booth_banner11, classes.booth_banner, classes.booth_banner_standing)} to={banner1Lnk} target="_blank" rel="noopenner"><img src={banner1} alt="Banner" /></Link>
								<Link className={clsx(classes.booth_banner12, classes.booth_banner, classes.booth_banner_standing)} to={banner2Lnk} target="_blank" rel="noopenner"><img src={banner2} alt="Banner" /></Link>
								<Link className={clsx(classes.booth_banner13, classes.booth_banner, classes.booth_banner_standing)} to={banner3Lnk} target="_blank" rel="noopenner"><img src={banner3} alt="Banner" /></Link>
							</div>
							}
							<div className="block m-auto text-center mt-24">
								<Button type="submit" variant="contained" className={clsx(classes.button, 'normal-case')} onClick={handleSubmit}>
									Publish
								</Button>
							</div>
						</div>
					</FuseAnimateGroup>
				</div>
			}
			innerScroll
		/>
	);
}
