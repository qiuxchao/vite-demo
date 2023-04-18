import { useState } from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter.jsx';
import { decrement, increment } from './store';

const App = props => {
	// 计数器
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>React + Vite</h1>
			<div>
				<div>
					<h2>Counter for State</h2>
					<Counter
						count={count}
						increment={() => setCount(c => c + 1)}
						decrement={() => setCount(c => c - 1)}
					/>
				</div>
				<div>
					<h2>Counter for Redux</h2>
					<Counter
						count={props.count}
						increment={() => props.dispatch(increment())}
						decrement={() => props.dispatch(decrement())}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		count: state.count,
	};
};

export default connect(mapStateToProps)(App);
