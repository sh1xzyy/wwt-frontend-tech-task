import { useEffect } from 'react'

export const useCloseModalByKeydown = (
	setIsModalOpen: (value: boolean) => void
) => {
	useEffect(() => {
		const handleEscapeClick = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				setIsModalOpen(false)
			}
		}

		document.addEventListener('keydown', handleEscapeClick)
		return () => document.removeEventListener('keydown', handleEscapeClick)
	}, [setIsModalOpen])
}
