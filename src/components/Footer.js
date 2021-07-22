import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Phillip Stewart's Get to know him
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Me</Heading>
			<FooterLink href="/aboutMe">About Me</FooterLink>
			<FooterLink href="/contact">Email Me</FooterLink>
		</Column>
		<Column>
			<Heading>Favorite</Heading>
			<FooterLink href="https://myanimelist.net/">Anime</FooterLink>
			<FooterLink href="https://en.wikipedia.org/wiki/Track_and_field">Track and Feild</FooterLink>
			<FooterLink href="https://github.com/">Coding Github</FooterLink>
			
		</Column>
		
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/stories">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/?lang=en">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
