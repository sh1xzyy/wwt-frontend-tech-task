import { createContext, useContext } from 'react'

import { ConfirmModalContextType } from './types'

const defaultValue = {
	isConfirmModalOpen: false,
	setIsConfirmModalOpen: () => {}
}

export const ConfirmModalContext =
	createContext<ConfirmModalContextType>(defaultValue)
export const useConfirmModalContext = () => useContext(ConfirmModalContext)
