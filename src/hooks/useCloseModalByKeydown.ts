import { useEffect } from 'react'

export const useCloseModalByKeydown = (
	setIsClosing: (value: boolean) => void
) => {
	useEffect(() => {
		const handleEscapeClick = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				setIsClosing(true)
			}
		}

		document.addEventListener('keydown', handleEscapeClick)
		return () => document.removeEventListener('keydown', handleEscapeClick)
	}, [setIsClosing])
}
