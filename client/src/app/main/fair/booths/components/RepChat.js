import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	chat: {
		backgroundColor: '#f7f7f7',
		minWidth: '30%',
		height: '50vh',
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

export default function RepChat() {
	useEffect(() => {
	  const script = document.createElement('script');

	  script.src = "assets/chat-script.js";

	  document.body.appendChild(script);

	  return () => {
	    document.body.removeChild(script);
	  }
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.chat}>
			<h1 className={classes.chat_title}>Chat</h1>
			<div className={classes.chat_area}>
				<section>
					<div id="messages"></div>
					<input id="chat-input" type="text" placeholder="say anything..." autofocus />
				</section>
			</div>
		</div>
	);
}
