import styled from 'styled-components';

export const Buttondiv = styled.div`
	margin-bottom: 3rem;
	display: flex;
    flex-flow: row wrap;
	justify-content: center;

	button {
		background: transparent;
		border: transparent;
		font-size: 1.25rem;
		margin: 1rem;
		padding: 0.375rem 0.75rem;
		text-transform: capitalize;
		transition: var(--transition);
		color: var(--clr-gold);
		letter-spacing: 2px;
        border-radius: 999px;

		:hover {
			background: var(--clr-gold);
			color: var(--clr-white);
		}
	}
`;
