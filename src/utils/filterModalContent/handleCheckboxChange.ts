import React from 'react'

import { CheckboxFilterGroup } from '../../components/FilterModalContent/types'

export const handleCheckboxChange = (
	setSelectedFilters: React.Dispatch<
		React.SetStateAction<CheckboxFilterGroup[]>
	>,
	filterIndex: number,
	itemIndex: number,
	value: boolean
) => {
	setSelectedFilters(prev => {
		const updated = [...prev]
		updated[filterIndex] = {
			...updated[filterIndex],
			filter: updated[filterIndex].filter.map((item, i) =>
				i === itemIndex ? { ...item, checked: value } : item
			)
		}
		return updated
	})
}
