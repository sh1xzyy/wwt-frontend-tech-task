import { ItemProps } from '../../types'

const CheckboxItem = ({ data: { label, name } }: ItemProps) => {
	return (
		<li>
			<label className="flex items-center cursor-pointer gap-[16px] group">
				<input
					className="visually-hidden"
					type="checkbox"
					name={name}
					onChange={e => console.log(e.target.checked)}
				/>
				<div className="relative rounded-[4px] group-has-[:checked]:bg-[#31393c] transition linear duration-[250ms]">
					<span className="flex w-[20px] h-[20px] border-2 rounded-[4px]"></span>
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-has-[:checked]:opacity-100 fill-amber-50">
						<svg
							width={16}
							height={16}
						>
							<use href="/icons/sprite.svg#icon-check-mark"></use>
						</svg>
					</span>
				</div>
				<span className="text-[#31393c]">{label}</span>
			</label>
		</li>
	)
}
export default CheckboxItem
