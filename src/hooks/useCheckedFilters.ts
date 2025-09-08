import { useEffect } from 'react'

import { CheckboxFilterGroup } from '../components/FilterModalContent/types'

export const useCheckedFilters = (
	selectedFilters: CheckboxFilterGroup[],
	setFilters: React.Dispatch<React.SetStateAction<CheckboxFilterGroup[]>>
) => {
	useEffect(() => {
		const checkedGroups = selectedFilters
			.map(group => ({
				...group,
				filter: group.filter.filter(el => el.checked)
			}))
			.filter(group => group.filter.length > 0)

		setFilters(checkedGroups)
	}, [selectedFilters, setFilters])
}
