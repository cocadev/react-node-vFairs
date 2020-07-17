import React, { useEffect } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';

export default function Chat() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "assets/chat-script.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

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
						<section>
							<div id="messages"></div>
							<input id="chat-input" type="text" placeholder="say anything..." autofocus />
						</section>
					</FuseAnimateGroup>
				</div>
			}
			innerScroll
		/>
	);
}
