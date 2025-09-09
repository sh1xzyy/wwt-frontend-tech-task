import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import clsx from 'clsx'

import { useConfirmModalContext } from '@/context/useConfirmModalContext/useConfirmModalContext'
import { globalFilter } from '@/filtersData/filters'
import { useFiltersQuery } from '@/hooks/useFiltersQuery'

import ConfirmModalContent from '../../../components/ConfirmModalContent/ConfirmModalContent'
import DataList from '../../../components/DataList/DataList'
import FilterModalContent from '../../../components/FilterModalContent/FilterModalContent'
import { CheckboxFilterGroup } from '../../../components/FilterModalContent/types'
import ActionButton from '../../../components/common/ActionButton/ActionButton'
import BaseModal from '../../../components/common/BaseModal/BaseModal'
import Container from '../../../components/common/Container/Container'
import Loader from '../../../components/common/Loader/Loader'
import { getFilteredArray } from '../../../utils/app/getFilteredArray'

export const App = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false)
	const { isConfirmModalOpen, setIsConfirmModalOpen } = useConfirmModalContext()
	const [filters, setFilters] = useState<CheckboxFilterGroup[]>(globalFilter)
	const { data, isLoading } = useFiltersQuery()
	const { t } = useTranslation()

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault()
		localStorage.setItem('filters', JSON.stringify(filters))
		setIsConfirmModalOpen(false)
		setIsFilterModalOpen(false)
	}

	if (isLoading) {
		return <Loader />
	}

	return (
		<div
			className={clsx(
				(isFilterModalOpen || isConfirmModalOpen) && 'overflow-hidden h-screen'
			)}
		>
			{isFilterModalOpen && (
				<BaseModal
					styles="px-[34px] py-[40px]"
					closeButtonStyles="top-[52px]"
					setIsModalOpen={setIsFilterModalOpen}
				>
					<FilterModalContent setFilters={setFilters} />
				</BaseModal>
			)}

			{isConfirmModalOpen && (
				<BaseModal
					styles="py-[32px] px-[32px]"
					closeButtonStyles="top-[44px]"
					setIsModalOpen={setIsConfirmModalOpen}
				>
					<ConfirmModalContent handleSubmit={handleSubmit} />
				</BaseModal>
			)}

			<section className="w-full h-dvh flex items-center">
				<Container>
					<div className="flex flex-col items-center gap-[50px]">
						<h1 className="text-6xl text-gray-600">
							{t('winwin_frontend_test_task')}
						</h1>
						<ActionButton
							styles="min-w-[184px] bg-[#ff5f00] text-[#fff] hover:bg-[#da5102]"
							title={t('open_modal')}
							func={() => setIsFilterModalOpen(true)}
						/>
					</div>
				</Container>
			</section>

			{data && (
				<section className="py-[40px]">
					<Container>
						<DataList data={getFilteredArray(data?.filterItems)} />
					</Container>
				</section>
			)}
		</div>
	)
}
