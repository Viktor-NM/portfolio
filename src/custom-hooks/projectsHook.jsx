const importAll = async (imgs) => {
	return Promise.all(
		Object.values(imgs).map(async (img) => {
			return { default: (await img()).default }
		})
	)
}

const covidPics = await importAll(import.meta.glob('../assets/projects/covid*.png'))
const demographyPics = await importAll(import.meta.glob('../assets/projects/demography*.png'))
const domiPics = await importAll(import.meta.glob('../assets/projects/domi*.png'))
const inteleczaPics = await importAll(import.meta.glob('../assets/projects/intelecza*.png'))
const weatherPics = await importAll(import.meta.glob('../assets/projects/weather*.png'))

export const projects = [
	{
		id: 0,
		name: 'Analizador de casos COVID',
		pics: covidPics,
	},
	{
		id: 1,
		name: 'DOMI App',
		pics: demographyPics,
	},
	{
		id: 2,
		name: 'Intelecza App',
		pics: domiPics,
	},
	{
		id: 3,
		name: 'Demography',
		pics: inteleczaPics,
	},
	{
		id: 4,
		name: 'Weather-react-app',
		pics: weatherPics,
	},
]
