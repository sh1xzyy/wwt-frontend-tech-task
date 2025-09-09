import { useState } from 'react'

import { globalFilter } from '@/filtersData/filters'

import { CheckboxFilterGroup } from '../components/FilterModalContent/types'

export const useFilterSelection = () => {
	const [selectedFilters, setSelectedFilters] = useState<CheckboxFilterGroup[]>(
		() => {
			const stored = localStorage.getItem('filters')
			if (!stored) {
				return globalFilter
			}

			const checkedGroups: CheckboxFilterGroup[] = JSON.parse(stored)

			return globalFilter.map(group => {
				const checkedGroup = checkedGroups.find(cg => cg.title === group.title)
				if (!checkedGroup) {
					return group
				}

				return {
					...group,
					filter: group.filter.map(item => {
						const checkedItem = checkedGroup.filter.find(
							i => i.name === item.name && i.checked
						)
						return checkedItem
							? { ...item, checked: true }
							: { ...item, checked: false }
					})
				}
			})
		}
	)

	return { selectedFilters, setSelectedFilters }
}
