import { IconBraces, IconDatabase } from '@tabler/icons-react'
import '../styles/Languages.scss'

export const Languages = () => {
	return (
		<section id='languages'>
			<header className='language'>
				<h2>
					LENGUAJES <IconBraces color='#0D0D0D' size={32} />
				</h2>
				<ul>
					<li>TypeScript ✔️</li>
					<li>JavaScript ✔️</li>
					<li>Python ✔️</li>
					<li>HTML ✔️</li>
					<li>CSS ✔️</li>
				</ul>
			</header>
			<article className='database'>
				<h2>
					BASES DE DATOS <IconDatabase color='#0D0D0D' size={32} />
				</h2>
				<ul>
					<li>MongoDB </li>
					<li>MySQL</li>
					<li>PostgreSQL</li>
					<li>GraphQL</li>
					<li>Firebase</li>
				</ul>
			</article>
			<article className='framework'>
				<h2>FRAMEWORKS Y HERRAMIENTAS</h2>
				<ul>
					<li>ReactJS</li>
					<li>NextJS</li>
					<li>NodeJS</li>
					<li>ReduxJS</li>
					<li>Django</li>
					<li>JQuery</li>
					<li>SASS</li>
					<li>TailwindCSS</li>
					<li>Bootstrap</li>
					<li>Figma</li>
				</ul>
			</article>
		</section>
	)
}
