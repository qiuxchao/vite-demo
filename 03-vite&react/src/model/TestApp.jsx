import React from 'react';

import Feature from './Feature';
import Option from './Option';

const TestApp = () => {
	return (
		<div className="flex mt-10">
			<div className="mr-12 flex-1 border border-solid border-purple-200 p-12 rounded-md text-center">
				<h2 className="text-[20px] font-medium">Test1</h2>
				<Feature />
			</div>
			<div className="border flex-1 border-solid border-orange-200 p-12 rounded-md text-center">
				<h2 className="text-[20px] font-medium">Test2</h2>
				<Option />
			</div>
		</div>
	);
};

export default TestApp;
