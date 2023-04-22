import { useNavigate } from 'react-router-dom';

const About = () => {
	// 路由
	const navigate = useNavigate();
	return (
		<div className="border border-solid border-purple-300 p-12 rounded-md text-center mt-10 flex flex-col justify-center">
			<h1 className="text-[30px] font-bold">About Page.</h1>
			<button className="text-blue-600 text-[16px] underline" onClick={() => navigate('/')}>
				To Home
			</button>
		</div>
	);
};

export default About;
