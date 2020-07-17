import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UniTable from './Bottom';
import Banners from './Banners';
import Booths from './Booths';
import $ from 'jquery';

const boothsNo = 5;
const width = boothsNo * 650;

const useStyles = makeStyles({
	hall: {
		position: 'relative',
		width: '100vw',
		minHeight: '612px',
		overflowX: 'auto',
	},
	hall_image: {
		width: width,
		maxWidth: width,
		minWidth: 1920,
		height: '600px',
		backgroundImage: 'url("assets/images/fair/hall.jpg")',
		backgroundRepeat: 'repeat-x',
		
	},
	arrow_right: {
		position: 'absolute',
		top: 300,
		right: 20,
		border: 'solid rgba(0, 255, 0, 1)',
		borderWidth: '0 6px 6px 0',
		display: 'inline-block',
		padding: 6,
		transform: 'rotate(-45deg)',
		zIndex: 100,
	},
	arrow_left: {
		position: 'absolute',
		top: 300,
		left: 20,
		border: 'solid rgba(0, 255, 0, 1)',
		borderWidth: '0 6px 6px 0',
		display: 'inline-block',
		padding: 6,
		transform: 'rotate(135deg)',
		zIndex: 100,
	}
});

export default function Hall() {
	const classes = useStyles();

	// const hall = $('#hall');
	// const handleClickLeft = () => { $('#left').on('click', function () { $(this).text("Go left" + hall.scrollLeft()); }); };
	// const handleClickRight = () => { $('#right').on('click', function () { $(this).text("Go right" + hall.scrollRight()); }); };

	return (
		<>
			<div id="hall" className={classes.hall}>
				<div className={classes.hall_image} />
				<div id="left" className={classes.arrow_left}  />
				<div id="right" className={classes.arrow_right} />
				<Banners />
				<Booths />
			</div>
			<UniTable />
		</>
	);
}
