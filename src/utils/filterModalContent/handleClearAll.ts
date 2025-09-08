import { CheckboxFilterGroup } from '../../components/FilterModalContent/types'

export const handleClearAll = (
	setSelectedFilters: React.Dispatch<
		React.SetStateAction<CheckboxFilterGroup[]>
	>,
	setFilters: React.Dispatch<React.SetStateAction<CheckboxFilterGroup[]>>,
	globalFilter: CheckboxFilterGroup[]
) => {
	setSelectedFilters(globalFilter)
	localStorage.setItem('filters', JSON.stringify([]))
	setFilters([])
}
