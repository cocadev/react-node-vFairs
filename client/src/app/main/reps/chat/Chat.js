import React, { useState } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({

});

export default function Chat() {
	const [chat, setChat] = useState(0);

	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pt-48 pl-24">
					<h1 className="text-48">Talk to your future students</h1>
				</div>
			}
			content={
				<div className="p-24">
					<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>

					</FuseAnimateGroup>
				</div>
			}
			innerScroll
		/>
	);
}
