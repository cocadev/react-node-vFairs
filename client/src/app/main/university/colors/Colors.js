import React, { useState, useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import * as base from 'app/env';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	booth_image: {
		width: '800px',
		height: '358px',
		marginLeft: '24px'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 160
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	circle: {
		display: 'inline-block',
		width: 22,
		height: 22,
		borderRadius: '50%',
		marginRight: 8,
		verticalAlign: 'text-top'
	},
	persian: { background: '#d13838' },
	tussock: { background: '#c6a053' },
	eminence: { background: '#5e2c83' },
	olive: { background: '#71962e' },
	lotus: { background: '#793d3f' },
	black: { background: '#000000' },
	biscay: { background: '#1e3167' },
	indochine: { background: '#bc6500' },
	gray: { background: '#7e7e7e' },
	cornflower: { background: '#82cbef' },
	candy: { background: '#fbec5f' },
	sea: { background: '#ffac23' },
	thunderbird: { background: '#d60000' },
	cooper: { background: '#7f3a12' },
	brick: { background: '#911a21' },
	emerald: { background: '#5ecf73' },
	jewel: { background: '#15663a' },
	cognac: { background: '#a23000' },
	blush: { background: '#bd4a68' },
	electric: { background: '#b41dff' },
	link: {
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	button: {
		width: 100,
		background: '#039be5',
		margin: '0 1.2rem',
		color: '#fff',
		'&:hover': {
			background: '#039be5',
			color: '#fff',
		}
	},
	message: {
	  color: '#fff',
	  backgroundColor: '#1E2125',
	  position: 'absolute',
	  left: 0,
	  top: '-95vh'
	}
}));

export default function Colors() {
	const classes = useStyles();
	const [message, setMessage] = useState(false);
	const [warning, setWarning] = useState(false);
	const [color, setColor] = useState('1');
	const [layout, setLayout] = useState('1');

	const api = base.base_url;

	useEffect(() => {
		// eslint-disable-next-line
		fetch(api + 'booth/get').then(res => res.json()).then(results => { results.map(row => {
			const current = row.layout;
			if (current !== '0') {
				setLayout(current);
			} else if (current === '0') {
				setWarning(true);
			}
		})});
  });

	const url = 'assets/images/fair/booths/' + layout + '/' + color  + '.png';

	const handleChange = (event) => {
		setColor(event.target.value);
	};

	const handleSubmit = () => {
		fetch(api + 'booth/color/set', { method: 'PUT', body: '{"color": "' + color + '"}', headers: { 'Content-Type': 'application/json' } }).then(res => res.text())
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
										<Typography className="mx-8">Color choice saved.</Typography>
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
										<Typography className="mx-8">Your layout settings is incorrect, please go back and save that settings.</Typography>
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
          <h1 className="text-48">Booth Color Choice</h1>
        </div>
      }
      content={
				<div className="w-full">
					<div className="p-24">
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<div className="flex w-full">
								<FormControl className={classes.formControl}>
									<InputLabel>Color</InputLabel>
									<Select	value={color}	onChange={handleChange}>
										<MenuItem value={1}><div className={clsx(classes.circle, classes.persian)}></div>Persian Red</MenuItem>
										<MenuItem value={2}><div className={clsx(classes.circle, classes.tussock)}></div>Tussock</MenuItem>
										<MenuItem value={3}><div className={clsx(classes.circle, classes.eminence)}></div>Eminence</MenuItem>
										<MenuItem value={4}><div className={clsx(classes.circle, classes.olive)}></div>Olive Drab</MenuItem>
										<MenuItem value={5}><div className={clsx(classes.circle, classes.lotus)}></div>Lotus</MenuItem>
										<MenuItem value={6}><div className={clsx(classes.circle, classes.black)}></div>Shark (Black)</MenuItem>
										<MenuItem value={7}><div className={clsx(classes.circle, classes.biscay)}></div>Biscay</MenuItem>
										<MenuItem value={8}><div className={clsx(classes.circle, classes.indochine)}></div>Indochine</MenuItem>
										<MenuItem value={9}><div className={clsx(classes.circle, classes.gray)}></div>Gray</MenuItem>
										<MenuItem value={10}><div className={clsx(classes.circle, classes.cornflower)}></div>Cornflower</MenuItem>
										<MenuItem value={11}><div className={clsx(classes.circle, classes.candy)}></div>Candy Corn</MenuItem>
										<MenuItem value={12}><div className={clsx(classes.circle, classes.sea)}></div>Yellow Sea</MenuItem>
										<MenuItem value={13}><div className={clsx(classes.circle, classes.thunderbird)}></div>Thunderbird</MenuItem>
										<MenuItem value={14}><div className={clsx(classes.circle, classes.cooper)}></div>Cooper Canyon</MenuItem>
										<MenuItem value={15}><div className={clsx(classes.circle, classes.brick)}></div>Old Brick</MenuItem>
										<MenuItem value={16}><div className={clsx(classes.circle, classes.emerald)}></div>Emerald</MenuItem>
										<MenuItem value={17}><div className={clsx(classes.circle, classes.jewel)}></div>Jewel</MenuItem>
										<MenuItem value={18}><div className={clsx(classes.circle, classes.cognac)}></div>Cognac</MenuItem>
										<MenuItem value={19}><div className={clsx(classes.circle, classes.blush)}></div>Blush</MenuItem>
										<MenuItem value={20}><div className={clsx(classes.circle, classes.persian)}></div>Electric Violet</MenuItem>
									</Select>
									<FormHelperText>Select color to preview your booth</FormHelperText>
								</FormControl>
								<img className={classes.booth_image} src={url} alt="Booth" />
							</div>
						</FuseAnimateGroup>
						<div className="block m-auto text-center mt-24">
							<Button type="submit" variant="contained" className={clsx(classes.button, 'normal-case')} onClick={handleSubmit}>
								Save
							</Button>
							<Link className={classes.link} to="/university/graphics">
								<Button type="button" variant="contained" className={clsx(classes.button, 'normal-case')}>
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
