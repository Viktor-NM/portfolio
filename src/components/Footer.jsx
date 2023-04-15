/* eslint-disable no-unused-vars */
import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from '@tabler/icons-react'
import cv from '../assets/Victor Nuñez - CV.pdf'
import '../styles/Footer.scss'
export const Footer = () => {
	return (
		<footer id='footer'>
			<header>
				<p>Contactame</p>
				<div>
					<a
						href='https://www.linkedin.com/in/victor-jesus-nu%C3%B1ez-mendoza-925814205/'
						title='Ir a LinkedIn'
						target='_blank'
						rel='external'>
						<IconBrandLinkedin size={48} color='#EFF0F3' stroke={2} />
					</a>
					<a
						href='https://github.com/Viktor-NM'
						title='Ir a GitHub'
						target='_blank'
						rel='external'>
						<IconBrandGithub size={48} color='#EFF0F3' stroke={2} />
					</a>
					<a href={cv} title='Descargar CV' rel='archives'>
						<IconFileCv size={48} color='#EFF0F3' stroke={1.3} target='_blank' />
					</a>
				</div>
			</header>
		</footer>
	)
}
