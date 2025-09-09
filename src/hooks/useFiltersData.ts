import { useEffect, useState } from 'react'

import { FilterChoose } from '@/shared/api/types/Filter'

import { CheckboxFilterGroup } from '../components/FilterModalContent/types'

export const useFiltersData = (
	data: { filterItems: FilterChoose[] } | undefined,
	filters: CheckboxFilterGroup[]
) => {
	const [list, setList] = useState<FilterChoose[]>([])

	useEffect(() => {
		if (!data?.filterItems) {
			return
		}

		const hasActiveFilters = filters.some(group =>
			group.filter.some(item => item.checked)
		)

		const filteredData = hasActiveFilters
			? data?.filterItems
					.map(item => {
						const matchedOptions = item.options.filter(option =>
							filters.some(group =>
								group.filter.some(gr => gr.name === option.id && gr.checked)
							)
						)

						return { ...item, options: matchedOptions }
					})
					.filter(item => item.options.length)
			: data?.filterItems

		setList(filteredData)
	}, [data, filters])

	return { list, setList }
}
