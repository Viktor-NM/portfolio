import '../styles/Projects.scss'

import { useState } from 'react'
import { projects } from '../custom-hooks/projectsHook'
import ProjectData from './ProjectData'

export const Projects = () => {
	const [currentProject, setCurrentProject] = useState(projects[0])

	const selectProject = (i) => {
		const projectSelected = projects.find((project) => project.id === i)
		setCurrentProject(projectSelected)
	}

	return (
		<section id='projects'>
			<h2>PROYECTOS</h2>
			<div className='projectData'>
				<nav className='projectList'>
					<ul>
						{projects.map(({ name, id }) => (
							<li
								onClick={() => selectProject(id)}
								className={currentProject.id === id ? 'active' : undefined}
								key={id}>
								{name}
							</li>
						))}
					</ul>
				</nav>
				<ProjectData project={currentProject} />
			</div>
		</section>
	)
}
