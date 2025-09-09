import { CheckboxFilterGroup } from '../../components/FilterModalContent/types'

export const handleClearAll = (
	setFilters: React.Dispatch<React.SetStateAction<CheckboxFilterGroup[]>>,
	globalFilter: CheckboxFilterGroup[]
) => {
	setFilters(globalFilter)
	localStorage.setItem('filters', JSON.stringify([]))
}
