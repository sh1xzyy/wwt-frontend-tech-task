import { FormEvent } from 'react'

import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'

import ActionButtons from './parts/ActionButtons'
import Title from './parts/Title'

interface ConfirmModalContentProps {
	handleSubmit: (e: FormEvent) => void
}

const ConfirmModalContent = ({ handleSubmit }: ConfirmModalContentProps) => {
	const { setIsConfirmModalOpen } = useConfirmModalContext()

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
