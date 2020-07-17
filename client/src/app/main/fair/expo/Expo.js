import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	hall: {
		position: 'relative',
		width: '100vw'
	},
	link: {
		position: 'absolute',
		left: 170,
		height: 100,
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	link1: {
		position: 'absolute',
		'&:hover': {
			textDecoration: 'none !important'
		}
	},
	hall_image: {
		width: '100vw',
		height: '100vh',
		backgroundImage: 'url("assets/images/fair/expohall.jpg")',
		backgroundSize: 'cover'
	}
});

export default function Hall() {
	const classes = useStyles();
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	}, []);
	return (
		<div className={classes.hall}>
			<div className={classes.hall_image} />
			<Link to="/fair/hall" className={classes.link}
				style={{ width: 200, top: width > 1679 ? 260 : 230 }}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 0.261 * width - 10.9 : 428,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 74 / 241 * width + 12.456 : 526,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 90 / 241 * width - 1.5 : 624,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 106 / 241 * width - 14 : 724,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 122 / 241 * width - 28 : 824,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 122 / 241 * width - 28 : 824,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 138 / 241 * width - 44 : 924,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 154 / 241 * width - 56.5 : 1024,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 0.12449 * width - 1 : 208,
					left: width > 1679 ? 170 / 241 * width - 68.5 : 1124,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 0.261 * width - 9 : 428,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 74 / 241 * width + 12.6 : 526,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 90 / 241 * width - 1.5 : 624,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 106 / 241 * width - 14 : 724,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 122 / 241 * width - 28 : 824,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 122 / 241 * width - 28 : 824,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 138 / 241 * width - 44 : 924,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 154 / 241 * width - 56.5 : 1024,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>

			<Link to="/fair/hall" className={classes.link1}
				style={{
					backgroundImage: 'url("assets/images/fair/expohall.jpg")',
					width: width > 1679 ? 10 / 241 * width + 20.34 : 90,
					top: width > 1679 ? 39 / 241 * width - 3 : 268,
					left: width > 1679 ? 170 / 241 * width - 68.5 : 1124,
					height: width > 1679 ? 7 / 241 * width + 2.24 : 51
				}}
			/>
		</div>
	);
}
