import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Login from './pages/Login.jsx';
import Templates from './pages/Templates.jsx';
import Home from './pages/Home.jsx';
import Theme_1 from './pages/Theme_1.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/templates' element={<Theme_1 />} />
		</Routes>
	</BrowserRouter>
)
