import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
box-shadow: 2px 2px 12px rgba(0,0,0,0.25);
align-items: center;
position: absolute;
bottom: 10px;
width: 90%;
max-height 200px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
    margin-left: 10px;
   
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 12000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;

flex-direction: column;
text-align: centre;
margin-right: 20px;

`;

export const Row = styled.div`
justify-content: center;
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
