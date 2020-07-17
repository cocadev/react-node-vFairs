import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';

export default function Status() {
  return (
    <FusePageSimple
      classes={{
        toolbar: 'px-24 border-b-1'
      }}
      header={
        <div className="pt-48 pl-24">
          <h1 className="text-48">Virtual Fairs Statistics</h1>
        </div>
      }
      content={
				<FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn" }} leave={{ animation: "transition.slideRightBigOut" }}>
    			<div className="flex flex-wrap">
            <div className="w-full p-24">
							
            </div>
    			</div>
    		</FuseAnimateGroup>
      }
      innerScroll
    />
  );
}
