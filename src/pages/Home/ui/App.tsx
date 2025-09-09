import { useTranslation } from 'react-i18next'

import clsx from 'clsx'

import { useFilterSelection } from '@/hooks/useFilterSelection'
import { useFiltersData } from '@/hooks/useFiltersData'
import { useFiltersQuery } from '@/hooks/useFiltersQuery'

import ConfirmModalContent from '../../../components/ConfirmModalContent/ConfirmModalContent'
import DataList from '../../../components/DataList/DataList'
import FilterModalContent from '../../../components/FilterModalContent/FilterModalContent'
import ActionButton from '../../../components/common/ActionButton/ActionButton'
import BaseModal from '../../../components/common/BaseModal/BaseModal'
import Container from '../../../components/common/Container/Container'
import Loader from '../../../components/common/Loader/Loader'
import { useModalStore } from '../../../store/useModalStore'

export const App = () => {
	const {
		isFilterModalOpen,
		setIsFilterModalOpen,
		isConfirmModalOpen,
		setIsConfirmModalOpen
	} = useModalStore()
	const { filters, setFilters } = useFilterSelection()
	const { data, isLoading } = useFiltersQuery()
	const { list } = useFiltersData(data, filters)
	const { t } = useTranslation()

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
					<FilterModalContent
						filters={filters}
						setFilters={setFilters}
					/>
				</BaseModal>
			)}

			{isConfirmModalOpen && (
				<BaseModal
					styles="py-[32px] px-[32px]"
					closeButtonStyles="top-[44px]"
					setIsModalOpen={setIsConfirmModalOpen}
				>
					<ConfirmModalContent
						setFilters={setFilters}
						filters={filters}
					/>
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

			<section className="py-[40px]">
				<Container>
					<h2 className="font-bold text-[32px] text-[#31393c] mb-[25px]">
						{t('filtered_data')}
					</h2>
					{data && <DataList data={list} />}
				</Container>
			</section>
		</div>
	)
}
