import React, { useState } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Booths from './components/Booths';
import Banners from './components/Banners';

export default function Hall(props) {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, value) => {
		setSelectedTab(value);
	};

	return (
		<FusePageSimple
			classes={{
				toolbar: 'px-24 border-b-1'
			}}
			header={
				<div className="pt-48 pl-24">
					<h1 className="text-48">Hall Setup</h1>
				</div>
			}
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
					<Tab className="normal-case" label="Booths Positions" />
					<Tab className="normal-case" label="Banners Setup" />
				</Tabs>
			}
			content={
				<div className="p-24">
					{selectedTab === 0 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<Booths />
							</Paper>
						</FuseAnimateGroup>
					)}
					{selectedTab === 1 && (
						<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn", 	stagger: 100, duration: 400, delay: 100 }} leave={{ animation: "transition.slideRightBigOut", stagger: 100, duration: 400, delay: 100 }}>
							<Paper className="w-full">
								<Banners />
							</Paper>
						</FuseAnimateGroup>
					)}
				</div>
			}
			innerScroll
		/>
	);
}
