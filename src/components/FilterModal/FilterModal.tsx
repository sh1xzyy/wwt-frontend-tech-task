import { useTranslation } from 'react-i18next'

import ActionButton from '@/common/ActionButton/ActionButton'
import Line from '@/common/Line/Line'
import { globalFilter } from '@/data/filters'

import CheckboxGroup from './parts/CheckboxGroup/CheckboxGroup'
import { FilterModalProps } from './types'

const FilterModal = ({ setIsFilterModalOpen }: FilterModalProps) => {
	const { t } = useTranslation()
	return (
		<>
			<div className="w-full">
				<h3 className="font-medium text-[40px] text-center text-[#31393c] mb-[25px]">
					{t('filter')}
				</h3>
				<Line />
			</div>

			<div className="w-full">
				<div className="mb-[32px]">
					<ul className="flex flex-col">
						{globalFilter.map((data, index) => (
							<CheckboxGroup
								key={index}
								data={{ ...data, index }}
							/>
						))}
					</ul>
				</div>
			</div>

			<ActionButton
				title={t('apply')}
				setIsModalOpen={setIsFilterModalOpen}
			/>

			<button
				className="absolute bottom-[70px] right-[39px] font-medium underline text-[#078691] transition linear duration-[250ms] hover:text-[#046f79]"
				type="button"
			>
				{t('clear_all_parameters')}
			</button>
		</>
	)
}

export default FilterModal
