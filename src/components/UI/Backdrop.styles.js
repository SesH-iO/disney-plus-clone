import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: 800;
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	transition: 0.2s all ease-in-out;
`;
