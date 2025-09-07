import { CheckboxFilterGroup } from '../FilterModalContent/types'
import ActionButtons from './parts/ActionButtons'
import Title from './parts/Title'

interface ConfirmModalContentProps {
	onConfirm: (filters: CheckboxFilterGroup[]) => void
}

const ConfirmModalContent = ({ onConfirm }: ConfirmModalContentProps) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onConfirm([])
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-[120px]">
				<Title />
				<ActionButtons />
			</div>
		</form>
	)
}

export default ConfirmModalContent
