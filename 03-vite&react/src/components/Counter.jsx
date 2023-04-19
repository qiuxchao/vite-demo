const Counter = ({ count = 0, increment, decrement }) => {
	return (
		<div className="p-10">
			<button className="px-5 bg-pink-400 rounded-md text-white text-[20px]" onClick={decrement}>
				-
			</button>
			<span className="mx-10 font-medium text-[30px]">{count}</span>
			<button className="px-5 bg-blue-400 rounded-md text-white text-[20px]" onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Counter;
