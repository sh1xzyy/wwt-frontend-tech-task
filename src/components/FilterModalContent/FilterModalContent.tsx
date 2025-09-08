import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'
import { globalFilter } from '@/data/filters'

import ActionButton from '../../components/common/ActionButton/ActionButton'
import CheckboxGroup from './parts/CheckboxGroup/CheckboxGroup'
import Title from './parts/Title'
import { CheckboxFilterGroup, onChangeInterface } from './types'

const FilterModalContent = ({ setFilters }: onChangeInterface) => {
	const { setIsConfirmModalOpen } = useConfirmModalContext()
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
	const { t } = useTranslation()

	const handleCheckboxChange = (
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

	useEffect(() => {
		const checkedGroups = selectedFilters
			.map(group => ({
				...group,
				filter: group.filter.filter(el => el.checked)
			}))
			.filter(group => group.filter.length > 0)

		setFilters(checkedGroups)
	}, [selectedFilters])

	const handleClearAll = () => {
		setSelectedFilters(globalFilter)
		localStorage.setItem('filters', JSON.stringify([]))
		setFilters([])
	}

	return (
		<>
			<Title />

			<div className="w-full">
				<div className="mb-[32px]">
					<ul className="flex flex-col">
						{selectedFilters.map((data, index) => (
							<CheckboxGroup
								key={index}
								data={{ ...data, index }}
								onChange={(itemIndex: number, value: boolean) =>
									handleCheckboxChange(index, itemIndex, value)
								}
							/>
						))}
					</ul>
				</div>
			</div>

			<ActionButton
				styles="min-w-[184px] bg-[#ff5f00] text-[#fff] hover:bg-[#da5102]"
				title={t('apply')}
				func={() => setIsConfirmModalOpen(true)}
			/>

			<button
				className="absolute bottom-[70px] right-[39px] font-medium underline text-[#078691] transition linear duration-[250ms] hover:text-[#046f79]"
				type="button"
				onClick={handleClearAll}
			>
				{t('clear_all_parameters')}
			</button>
		</>
	)
}

export default FilterModalContent
