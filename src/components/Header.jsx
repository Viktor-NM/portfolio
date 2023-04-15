import Profile from '../assets/Profile'
import '../styles/Header.scss'

export const Header = () => {
	return (
		<section id='Header'>
			<header>
				<Profile />
			</header>
			<nav>
				<div>
					<h1>
						Víctor <span>Nuñez</span>
					</h1>
					<h2>Web Developer 💻</h2>
				</div>
				<ul>
					<li>
						<a href='#about'>¿Quién soy?</a>
					</li>
					<li>
						<a href='#languages'>Tecnologías</a>
					</li>
					<li>
						<a href='#projects'>Proyectos</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}
