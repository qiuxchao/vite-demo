const Counter = ({ count = 0, increment, decrement }) => {
	return (
		<div>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;
