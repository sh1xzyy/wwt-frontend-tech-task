import { useTranslation } from 'react-i18next'

const Title = () => {
	const { t } = useTranslation()
	return (
		<h4 className="font-medium text-[40px] text-[#31393c]">
			{t('apply_filters')}
		</h4>
	)
}

export default Title
