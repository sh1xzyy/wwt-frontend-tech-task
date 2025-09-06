export interface CheckboxItemProps {
	label: string
	name: string
}

export interface CheckboxListProps {
	filters: CheckboxItemProps[]
}

export interface ItemProps {
	data: CheckboxItemProps
}

export interface FilterModalProps {
	setIsFilterModalOpen: (a: boolean) => void
}

export interface FilterOption {
	label: string
	name: string
}

interface CheckboxGroupProps {
	title: string
	filter: CheckboxItemProps[]
	index: number
}

export interface GroupProps {
	data: CheckboxGroupProps
}
