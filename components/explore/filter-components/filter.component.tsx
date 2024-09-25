import { StyledBtnOpacity, StyledIonicIcons, StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import ColorFilter from './color-filter.component'
import CategoryFilter from './category-filter.component'
import PriceFilter from './price-filter.component'

type FilterType = {
    onPress: () => void,
    displayFilter: boolean
}

const Filter = ({ onPress, displayFilter }: FilterType) => {
    console.log(displayFilter)
    return (
        <StyledView className='flex-1'>
            <StyledView className='flex flex-row justify-between align-middle'>
                <StyledText className='font-bold text-zinc-800 text-center text-3xl'>
                    Filter
                </StyledText>
                <StyledBtnOpacity className='self-center' onPress={onPress}>
                    <StyledIonicIcons name='close' size={24} className='text-zinc-800' />
                </StyledBtnOpacity>
            </StyledView>
            {displayFilter && <ColorFilter />}
            {displayFilter && <CategoryFilter />}
            {displayFilter && <PriceFilter />}
        </StyledView>
    )
}

export default Filter