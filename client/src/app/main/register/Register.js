import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import JWTRegister from './JWTRegister';

const useStyles = makeStyles(theme => ({
	root: {
		background: '#039be5',
		color: theme.palette.primary.contrastText
	}
}));

function Register() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0')}>
			<div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
				<FuseAnimate animation="transition.expandIn">
					<img className="w-128 mb-32" src="assets/images/logos/odros-full.png" alt="logo" />
				</FuseAnimate>

				<FuseAnimate animation="transition.slideUpIn" delay={300}>
					<Typography variant="h3" color="inherit" className="font-light">
						Welcome to Odros!
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={400}>
					<Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
						But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
						and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness...
					</Typography>
				</FuseAnimate>
			</div>

			<FuseAnimate animation={{ translateX: [0, '100%'] }}>
				<Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
					<CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
						<Typography variant="h6" className="md:w-full mb-32">
							CREATE AN ACCOUNT
						</Typography>

						<JWTRegister />

						<div className="flex flex-col items-center justify-center pt-32 pb-24">
							<span className="font-medium">Already have an account?</span>
							<Link className="font-medium" to="/login">
								Login here!
							</Link>
							<Link className="font-medium mt-8" to="/fair/hall">
								Back to Fair Hall
							</Link>
						</div>

						<div className="flex flex-col items-center" />
					</CardContent>
				</Card>
			</FuseAnimate>
		</div>
	);
}

export default Register;
