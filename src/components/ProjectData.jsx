import { memo, useEffect, useMemo, useState } from 'react'

const ProjectData = memo(({ project }) => {
	const [currentPicIndex, setCurrentPicIndex] = useState(0)
	const [projectPic, setProjectPic] = useState([])

	useEffect(() => {
		setProjectPic(project.pics)
		setCurrentPicIndex(0)
	}, [project])

	const currentPicUrl = useMemo(() => {
		return projectPic[currentPicIndex]?.default
	}, [projectPic, currentPicIndex])

	return (
		<section className='currentProject'>
			<article>
				<img src={currentPicUrl} alt={project.name} title={project.name} loading='lazy' />
			</article>
			<footer>
				<nav>
					{projectPic.map((pic, i) => (
						<div onClick={() => setCurrentPicIndex(i)} key={i} className='oimg'>
							{i + 1}
						</div>
					))}
				</nav>
			</footer>
		</section>
	)
})

export default ProjectData
