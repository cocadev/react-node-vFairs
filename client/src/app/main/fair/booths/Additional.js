import React, { useState, useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Documents from './components/Documents';
import Videos from './components/Videos';
import ChatPanel from './components/ChatPanel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
	container: {
		height: '50vh',
		maxHeight: '50vh',
		minHeight: '50vh',
		'& > div': {
			height: '50vh',
			maxHeight: '50vh',
			minHeight: '50vh'
		}
	},
	logo: {
		display: 'inline-block',
		width: '4.8rem',
		height: '4.8rem',
		marginRight: '1.34em',
	},
	name: {
		display: 'inline-block',
		fontSize: '4.8rem',
		verticalAlign: 'middle'
	},
	desc: {
		fontSize: '1.2rem',
		textAlign: 'left',
		width: '80%',
		margin: '0.67em auto'
	},
	chat: {
		backgroundColor: '#f7f7f7',
		minWidth: '30%',
		height: '50vh',
	},
	chat_window: {
		display: 'flex'
	},
	chat_title: {
		width: '100%',
		background: '#505050',
		textAlign: 'center',
		padding: '.75rem 0',
		color: '#fff',
		margin: 0
	},
	chat_area: {
		width: '100%'
	}
});

export default function Additional() {
	useEffect(() => {
	  const script = document.createElement('script');

	  script.src = "assets/chat-script.js";

	  document.body.appendChild(script);

	  return () => {
	    document.body.removeChild(script);
	  }
	}, []);

	const classes = useStyles();

	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, value) => {
		setSelectedTab(value);
	};

	return (
		<div className={clsx(classes.container, "w-full flex")}>
			<FusePageSimple
				classes={{
					toolbar: 'border-b-1'
				}}
				header={false}
				contentToolbar={
					<Tabs
						value={selectedTab}
						onChange={handleTabChange}
						indicatorColor="primary"
						textColor="primary"
						variant="scrollable"
						scrollButtons="off"
						className="w-full"
					>
						<Tab className="normal-case" label="About" />
						<Tab className="normal-case" label="Documents" />
						<Tab className="normal-case" label="Videos" />
					</Tabs>
				}
				content={
					<div className="p-24">
						{selectedTab === 0 && (
							<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
								<img className={classes.logo} src="assets/images/fair/banners/placeholder.png" alt="University Logo" />
								<Typography className={classes.name}>University Name</Typography>
								<Typography className={classes.desc}>
									university description...
								</Typography>
							</FuseAnimateGroup>
						)}
						{selectedTab === 1 && (
							<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
								<div className="w-full">
									<Documents />
								</div>
							</FuseAnimateGroup>
						)}
						{selectedTab === 2 && (
							<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
								<div className="w-full">
									<Videos />
								</div>
							</FuseAnimateGroup>
						)}
					</div>
				}
				innerScroll
			/>
			<div className={classes.chat}>
				<h1 className={classes.chat_title}>Chat</h1>
				<div className={classes.chat_window}>
					<div className={classes.chat_area}>
						<section>
							<div id="messages"></div>
							<input id="chat-input" type="text" placeholder="say anything..." autofocus />
						</section>
					</div>
					<ChatPanel />
				</div>
			</div>
		</div>
	);
}
