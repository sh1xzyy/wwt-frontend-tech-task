import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ActionButton from '@/common/ActionButton/ActionButton'
import BaseModal from '@/common/BaseModal/BaseModal'

import FilterModal from '../../../components/FilterModal/FilterModal'

export const App = () => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false)
	const { t } = useTranslation()

	console.log(isFilterModalOpen)

	return (
		<>
			{isFilterModalOpen && (
				<BaseModal setIsModalOpen={setIsFilterModalOpen}>
					<FilterModal setIsFilterModalOpen={setIsFilterModalOpen} />
				</BaseModal>
			)}
			<section className="w-full h-dvh flex items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="text-6xl text-gray-600 mb-12">
						{t('winwin_frontend_test_task')}
					</h1>
					<ActionButton
						title={t('open_modal')}
						setIsModalOpen={setIsFilterModalOpen}
					/>
				</div>
			</section>
		</>
	)
}
