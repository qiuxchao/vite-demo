import { useState } from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter.jsx';
import TestApp from './model/TestApp.jsx';
import { decrement, increment } from './store';

const App = props => {
	// 计数器
	const [count, setCount] = useState(0);
	return (
		<div className="p-8">
			<h1 className="text-center font-bold text-[28px]">
				<span className="text-[#299ECA]">React</span> + <span className="text-[#646CFF]">Vite</span>
			</h1>
			<div className="flex mt-10">
				<div className="mr-12 flex-1 border border-solid border-red-200 p-12 rounded-md text-center">
					<h2 className="text-[20px] font-medium">Counter for State</h2>
					<Counter
						count={count}
						increment={() => setCount(c => c + 1)}
						decrement={() => setCount(c => c - 1)}
					/>
				</div>
				<div className="border flex-1 border-solid border-green-200 p-12 rounded-md text-center">
					<h2 className="text-[20px] font-medium">Counter for Redux</h2>
					<Counter
						count={props.count}
						increment={() => props.dispatch(increment())}
						decrement={() => props.dispatch(decrement())}
					/>
				</div>
			</div>
			<TestApp />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		count: state.count,
	};
};

export default connect(mapStateToProps)(App);
