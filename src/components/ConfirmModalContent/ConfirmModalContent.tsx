import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'

import { CheckboxFilterGroup } from '../FilterModalContent/types'
import ActionButtons from './parts/ActionButtons'
import Title from './parts/Title'

interface ConfirmModalContentProps {
	onConfirm: (filters: CheckboxFilterGroup[]) => void
	filters: CheckboxFilterGroup[]
}

const ConfirmModalContent = ({
	onConfirm,
	filters
}: ConfirmModalContentProps) => {
	const { setIsConfirmModalOpen } = useConfirmModalContext()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		localStorage.setItem('filters', JSON.stringify(filters))
		setIsConfirmModalOpen(false)
		onConfirm([])
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col gap-[120px]">
				<Title />
				<ActionButtons setIsConfirmModalOpen={setIsConfirmModalOpen} />
			</div>
		</form>
	)
}

export default ConfirmModalContent
