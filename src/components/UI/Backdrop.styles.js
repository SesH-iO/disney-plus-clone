import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 800;
	/* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition: all 0.3s;

	@media screen and (min-width: 1030px) {
		display: none;
	}
`;
