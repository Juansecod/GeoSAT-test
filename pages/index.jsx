import React from 'react';
var ReactDOM = require('react-dom');
import Link from 'next/link';

function HomePage() {
	const data = fetch('http://localhost:3010/api/v1/predios').then(res => res.json()).then(res => console.log(res));
	return (
		<main>
			<h1>Titulo</h1>
			<Link href="/create-predio">
				<a>Add predio</a>
			</Link>
		</main>
	);
} 
export default HomePage;
/* 
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
function HomePage(){return (<DatePicker />)};
export default HomePage; */