import { PulseLoader } from 'react-spinners'

const Loader = () => {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<PulseLoader />
		</div>
	)
}

export default Loader
