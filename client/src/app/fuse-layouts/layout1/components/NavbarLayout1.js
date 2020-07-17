import FuseScrollbars from '@fuse/core/FuseScrollbars';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import UserNavbarHeader from 'app/fuse-layouts/shared-components/UserNavbarHeader';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
	content: {
		overflowX: 'hidden',
		overflowY: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		background:
			'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 40px, 100% 10px',
		backgroundAttachment: 'local, scroll'
	}
});

function NavbarLayout1(props) {
	const classes = useStyles();

	return (
		<div className={clsx('flex flex-col overflow-hidden h-full', props.className)}>
			<AppBar
				color="primary"
				position="static"
				elevation={0}
				className="flex flex-row items-center flex-shrink h-64 min-h-64 px-12"
			>
				<div className="flex flex-1 mx-8">
					<Logo />
				</div>
			</AppBar>

			<FuseScrollbars className={clsx(classes.content)} option={{ suppressScrollX: true }}>
				<UserNavbarHeader />

				<Navigation layout="vertical" />
			</FuseScrollbars>
		</div>
	);
}

export default NavbarLayout1;
