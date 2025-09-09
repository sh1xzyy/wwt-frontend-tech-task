import { useTranslation } from 'react-i18next'

import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'
import { globalFilter } from '@/filtersData/filters'

import ActionButton from '../../components/common/ActionButton/ActionButton'
import { handleCheckboxChange } from '../../utils/filterModalContent/handleCheckboxChange'
import { handleClearAll } from '../../utils/filterModalContent/handleClearAll'
import CheckboxGroup from './parts/CheckboxGroup/CheckboxGroup'
import Title from './parts/Title'
import { onChangeInterface } from './types'

const FilterModalContent = ({ filters, setFilters }: onChangeInterface) => {
	const { setIsConfirmModalOpen } = useConfirmModalContext()
	const { t } = useTranslation()

	return (
		<>
			<Title />

			<div className="w-full">
				<div className="mb-[32px]">
					<ul className="flex flex-col">
						{filters.map((data, index) => (
							<CheckboxGroup
								key={index}
								data={{ ...data, index }}
								onChange={(itemIndex: number, value: boolean) =>
									handleCheckboxChange(setFilters, index, itemIndex, value)
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
				onClick={() => handleClearAll(setFilters, globalFilter)}
			>
				{t('clear_all_parameters')}
			</button>
		</>
	)
}

export default FilterModalContent
