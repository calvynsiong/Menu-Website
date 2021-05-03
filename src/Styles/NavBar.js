import styled from 'styled-components';

export const Nav = styled.div`
	background: var(--clr-gold);
    position: fixed;
    z-index:10;
    width: 100%;
	color: ${(props) => props.theme.text};
	justify-content: space-between;
    
	@media (min-width: 800px) {
        display: flex;
	}
	div {
        display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		h2 {
            padding-left: 1rem;
			margin: 0.5rem 0;
		}
        
		img {
            height: 4rem;
		}
	}
	button {
        transition: all 0.2s linear;
		background: transparent;
		border: transparent;
		margin: 1rem;
        
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		:hover {
			transform: rotate(-90deg);
            border:5px solid ${(props) => props.theme.text};
            border-radius:50%;
		}
		@media (min-width: 800px) {
			display: none;
		}
	}
`;

export const LinkContainer = styled.div`
	height: auto;
	overflow: hidden;
	transition: all 0.5s ease-in;
	@media (min-width: 800px) {
		display: inline-block;
		width: 2rem;
	}

	ul {
		display: flex;
		width: 100vw;
		flex-direction: column;
		padding-left: 0;
		margin: 0;
		@media (min-width: 800px) {
			margin-right: clamp(0.5rem, 1rem, 1.5rem);
			flex-direction: row;
			justify-content: flex-end;
		}
	}
	li {
		text-decoration: none;
		:hover {
			background: ${(props) => props.theme.background};
		}
		a {
			color: ${(props) => props.theme.text};
			padding: 1rem;
			display: inline-block;
		}
	}
`;
