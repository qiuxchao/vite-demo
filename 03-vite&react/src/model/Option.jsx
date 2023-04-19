import { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

/** 配置组件 */
const Option = () => {
	// 组件内置状态
	const [state, setState] = useState(null);

	useEffect(() => {
		// 订阅更新激活组件状态
		const token = PubSub.subscribe('UPDATE_ACTIVATED_EL', (_, data) => {
			// 更新自己的状态
			setState({ ...data });
		});
		return () => {
			PubSub.unsubscribe(token);
		};
	}, []);

	return (
		<div>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};

export default Option;
