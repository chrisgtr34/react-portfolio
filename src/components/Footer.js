import React from "react";
import { MarkGithubIcon } from '@primer/octicons-react';
import { SocialIcon } from 'react-social-icons';

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
			<h1 style={{
				color: "green",
				textAlign: "center",
				marginTop: "-220px"
			}}>
				GeeksforGeeks: A Computer Science Portal for Geeks
			</h1>
			<Container>
				<Row>

					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="https://github.com">
							<h1>
								
								<a href="https://github.com">
									<MarkGithubIcon size={50} />
									

								</a>
							</h1>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "500px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<SocialIcon url="https://linkedin.com" />

							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginInline: "200px" }}>
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

