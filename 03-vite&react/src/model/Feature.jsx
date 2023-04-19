import { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

import { UPDATE_ACTIVATED_EL } from './schedule';

/** 功能组件 */
const Feature = ({ initialState = {} }) => {
	// 组件内置状态
	const [state, setState] = useState({ ...initialState });

	useEffect(() => {
		// 订阅更新激活组件状态
		const token = PubSub.subscribe(UPDATE_ACTIVATED_EL, (msg, data) => {
			// 如果自己就是激活的组件，就更新自己的状态
			if (data.id === state.id) {
				setState({ ...data });
			}
		});
		return () => {
			PubSub.unsubscribe(token);
		};
	}, []);

	// 更新状态
	const updateState = newState => {
		setState({ ...newState });
		// 如果自己是激活的组件，就发布更新激活组件状态的消息
		if (newState.isActivated) {
			PubSub.publish(UPDATE_ACTIVATED_EL, newState);
		}
	};

	return <Renderer state={state} updateState={updateState} />;
};

const Renderer = ({ state, updateState }) => {
	return (
		<div>
			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
};

export default Feature;
