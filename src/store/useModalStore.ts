import { create } from 'zustand'

interface useModalState {
	isConfirmModalOpen: boolean
	isFilterModalOpen: boolean
	setIsConfirmModalOpen: (value: boolean) => void
	setIsFilterModalOpen: (value: boolean) => void
}

export const useModalStore = create<useModalState>(set => ({
	isConfirmModalOpen: false,
	isFilterModalOpen: false,
	setIsConfirmModalOpen: value => set({ isConfirmModalOpen: value }),
	setIsFilterModalOpen: value => set({ isFilterModalOpen: value })
}))
