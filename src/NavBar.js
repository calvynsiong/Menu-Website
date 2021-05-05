import React, { useState, useEffect } from 'react';
import { Nav, LinkContainer } from './Styles/NavBar';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
	const [showlinks, setShowLinks] = useState(true);

	const showUp = () => {
		if (window.innerWidth > 800) {
			setShowLinks(true);
		} else {
			setShowLinks(false)
		}
	};
	const respShowUp = () => {
		if (window.innerWidth < 800) {
			setShowLinks(!showlinks);
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
							<a href='#FrontPage' onClick={() => {
							  respShowUp()
							}}>Home</a>
						</li>
						<li>
							<a href='#Menu' onClick={() => {
							  respShowUp()
							}}>Menu</a>
						</li>
						<li>
							<a href='#Footer' onClick={() => {
							  respShowUp()
							}}>Contacts</a>
						</li>
					</ul>
				</LinkContainer>
			)}
		</Nav>
	);
};

export default NavBar;
