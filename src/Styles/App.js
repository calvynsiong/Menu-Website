import styled from 'styled-components';

export const Section = styled.section`
	padding: 5rem 0;
	width: 90vw;
	margin: 0 auto;
	max-width: var(--max-width);
`;
export const Title = styled.div`
	display: grid;
	place-items: center;
	text-align: center;
`;
export const Underline = styled.div`
	width: 5rem;
	height: 0.25rem;
	background-color: var(--clr-gold);
	margin: -1rem auto 2rem;
`;

export const Application = styled.main`
	--clr-gold:  ${(props) => props.theme.highlights};
	/* background-color: black;
 */
	background-color: ${(props) => props.theme.background};
	transition: all 0.25s linear;
	color: ${(props) => props.theme.text};
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	overflow-x: hidden;
	overflow: hidden;
	scroll-behavior: smooth;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	word-wrap: break-word;

	h1 {
		font-size: 3rem;
		@media (min-width: 768px) {
			font-size: 4rem;
		}
		@media (min-width: 1280px) {
			font-size: 5rem;
		}
	}

	h2 {
		font-size: 2rem;
		@media (min-width: 768px) {
			font-size: 3rem;
		}
		@media (min-width: 1280px) {
			font-size: 4rem;
		}
	}

	h3 {
		font-size: 1.5rem;
		@media (min-width: 768px) {
			font-size: 2.5rem;
		}
		@media (min-width: 1280px) {
			font-size: 3.5rem;
		}
	}

	h4 {
		font-size: 1.125rem;
		@media (min-width: 768px) {
			font-size: 1.25rem;
		}
		@media (min-width: 1280px) {
			font-size: 1.5rem;
		}
	}

	p,a {
		font-size: 1.125rem;
		@media (min-width: 768px) {
			font-size: 1.5rem;
		}
		@media (min-width: 1280px) {
			font-size: 1.75rem;
		}
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
`;
