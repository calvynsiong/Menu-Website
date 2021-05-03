import styled from 'styled-components';

export const Hero = styled.div`
	background-image: linear-gradient(0deg, #00000088 30%, #ffffff44 100%),
		url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsYXlzaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80);
	height: 100vh;
	background-size: cover;
	word-break: break-word;
	font-style: italic;
	font-family: URW Chancery L, serif;
	position: block;
	width: 100%;
	display: grid;
	place-content: center;
	text-align: center;
	color: white;
	margin: 0;

	h1 {
		margin: 0 1rem;
        padding: 0 1rem;
		font-size: min(5em, 20vw);
		@media (min-width: 640px) {
			font-size: 6rem;
		}
		@media (min-width: 768px) {
			font-size: 7rem;
		}
		@media (min-width: 1280px) {
			font-size: 8rem;
		}
	}
	h3 {
		@media (max-width: 640px) {
			font-size: min(3em, 10vw);
		}
	}
`;
