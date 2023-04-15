import '../styles/About.scss'

export const About = () => {
	return (
		<section id='about'>
			<h2>¿QUIÉN SOY? 🙋‍♂️</h2>
			<article>
				<p>
					<b>Desarrollador web</b> apasionado por el mundo de la programación y las
					tecnologías web. Con habilidades en <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>,
					busco oportunidades para seguir creciendo en este apasionante campo. Soy un
					joven desarrollador web con experiencia en el <b>diseño</b> y{' '}
					<b>desarrollo de sitios web</b>, y con muchas ganas de aprender más y trabajar
					en proyectos desafiantes que me permitan seguir{' '}
					<b>creciendo profesionalmente</b>. 💻
				</p>
			</article>
			<fieldset className='reactions'>
				<label htmlFor='like'>
					<input type='radio' name='reaction' id='like' />
					<span>👍</span>
				</label>
				<label htmlFor='laught'>
					<input type='radio' name='reaction' id='laught' />
					<span>🤣</span>
				</label>
				<label htmlFor='heart'>
					<input type='radio' name='reaction' id='heart' />
					<span>❤️</span>
				</label>
				<label htmlFor='exploting'>
					<input type='radio' name='reaction' id='exploting' />
					<span>🤯</span>
				</label>
			</fieldset>
		</section>
	)
}
