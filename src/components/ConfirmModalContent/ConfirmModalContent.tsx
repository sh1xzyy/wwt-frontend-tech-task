import { FormEvent } from 'react'

import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'

import ActionButtons from './parts/ActionButtons'
import Title from './parts/Title'
import { ConfirmModalContentProps } from './types'

const ConfirmModalContent = ({
	setFilters,
	setIsFilterModalOpen,
	filters
}: ConfirmModalContentProps) => {
	const { setIsConfirmModalOpen } = useConfirmModalContext()

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
				<ActionButtons setIsConfirmModalOpen={setIsConfirmModalOpen} />
			</div>
		</form>
	)
}

export default ConfirmModalContent
