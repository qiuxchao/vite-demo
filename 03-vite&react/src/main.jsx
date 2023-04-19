import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import './index.css';

ReactDOM.createRoot(document.querySelector('#app')).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
