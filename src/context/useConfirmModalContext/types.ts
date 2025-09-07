import { ReactNode } from 'react'

export interface ConfirmModalContextType {
	isConfirmModalOpen: boolean
	setIsConfirmModalOpen: (value: boolean) => void
}

export interface ChildrenProps {
	children: ReactNode
}
