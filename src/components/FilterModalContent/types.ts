export interface CheckboxItemProps {
	label: string
	name: string
	checked: boolean
}

export interface CheckboxFilterGroup {
	title: string
	filter: CheckboxItemProps[]
}

export interface onChangeInterface {
	setFilters: (filters: CheckboxFilterGroup[]) => void
}

export interface CheckboxListProps {
	filters: CheckboxItemProps[]
	onChange: (itemIndex: number, value: boolean) => void
}

export interface ItemProps {
	data: CheckboxItemProps
	index: number
	onChange: (itemIndex: number, value: boolean) => void
}

export interface GroupProps {
	data: CheckboxFilterGroup & { index: number }
	onChange: (itemIndex: number, value: boolean) => void
}
