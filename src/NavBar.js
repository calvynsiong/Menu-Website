import React, { useState, useEffect } from 'react';
import { Nav, LinkContainer } from './Styles/NavBar';
import { FaBars } from 'react-icons/fa';
import logo from './Styles/personalbrand.png';

const NavBar = () => {
	const [showlinks, setShowLinks] = useState(false);

	const showUp = () => {
		if (window.innerWidth > 800) {
			setShowLinks(true);
        }
	};
	useEffect(() => {
		window.addEventListener('resize', showUp);
		return () => {
			window.addEventListener('resize', showUp);
		};
	},[showlinks]);

	return (
		<Nav>
			<div>
				<h2>Calvyn Siong</h2>

				<button onClick={() => setShowLinks(!showlinks)}>
					<FaBars size={40}></FaBars>
				</button>
			</div>
			{showlinks && (
				<LinkContainer>
					<ul>
						<li>
							<a href='#FrontPage'>Home</a>
						</li>
						<li>
							<a href='#Menu'>Menu</a>
						</li>
						<li>
							<a href='#Footer'>Contacts</a>
						</li>
					</ul>
				</LinkContainer>
			)}
		</Nav>
	);
};

export default NavBar;
