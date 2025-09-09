import { FormEvent } from 'react'

import { useModalStore } from '../../store/useModalStore'
import ActionButtons from './parts/ActionButtons'
import Title from './parts/Title'
import { ConfirmModalContentProps } from './types'

const ConfirmModalContent = ({
	setFilters,
	filters
}: ConfirmModalContentProps) => {
	const { setIsFilterModalOpen, setIsConfirmModalOpen } = useModalStore()

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault()
		localStorage.setItem('filters', JSON.stringify(filters))
		setFilters(filters)
		setIsConfirmModalOpen(false)
		setIsFilterModalOpen(false)
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
