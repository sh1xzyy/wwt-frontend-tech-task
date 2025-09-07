import { useTranslation } from 'react-i18next'

import Line from '../../common/Line/Line'

const Title = () => {
	const { t } = useTranslation()
	return (
		<div className="w-full">
			<h3 className="font-medium text-[40px] text-center text-[#31393c] mb-[25px]">
				{t('filter')}
			</h3>
			<Line />
		</div>
	)
}

export default Title
