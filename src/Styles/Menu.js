import styled from 'styled-components';

export const MenuSection = styled.div`
	width: 90vw;
	margin: 0 auto;
	max-width: 1170px;
	display: grid;
	gap: 3rem 2rem;
	justify-items: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	/* grid-template-rows: repeat(auto-fit, minmax(300px, 1fr)); */
`;

export const MenuItem = styled.article`
	display: flex;
	flex-direction: column;
	border-radius: 1em;
	justify-content: space-space-evenly;
	max-width: 25rem;
	position: relative;
	overflow:hidden;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	div{
		display: flex;
		flex-direction: column;
		padding:0 .75rem;
	}

	p::first-letter {
			text-transform: capitalize;
			font-weight: 600;
			font-size: 1.5rem;
		
	}
`;

export const Photo = styled.img`
	margin: 0;
	padding: 0;
	object-fit: cover;
	text-align: center;
	width: 100%;
	height: clamp(200px, 225px, 275px);
	transition: transform 0.25s ease-in;
	overflow-y: hidden;

	:hover {
		transform: scale(1.2);
	}
`;

export const ItemHeader = styled.header`
	display: flex;
	justify-content: space-between;
	h4 {
		margin-bottom: 0.5rem;
		max-width: 15ch;
		text-transform: capitalize;
	}
`;
