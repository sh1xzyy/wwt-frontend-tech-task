import { create } from 'zustand'

interface useModalState {
	isConfirmModalOpen: boolean
	isFilterModalOpen: boolean
	isClosing: boolean
	setIsConfirmModalOpen: (value: boolean) => void
	setIsFilterModalOpen: (value: boolean) => void
	setIsClosing: (value: boolean) => void
}

export const useModalStore = create<useModalState>(set => ({
	isConfirmModalOpen: false,
	isFilterModalOpen: false,
	isClosing: false,
	setIsConfirmModalOpen: value => set({ isConfirmModalOpen: value }),
	setIsFilterModalOpen: value => set({ isFilterModalOpen: value }),
	setIsClosing: value => set({ isClosing: value })
}))
