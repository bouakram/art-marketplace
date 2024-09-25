import { StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'
import { StyledBtnOpacity, StyledIonicIcons, StyledText } from '@/components/rn-styled-component/WindComponents'

type FilterButtonType = {
    onPress: () => void
}

const FilterButton = ({ onPress }: FilterButtonType) => {
    return (
        <StyledBtnOpacity
            onPress={onPress}
        >
            <StyledMotiView
                className="flex flex-row justify-center items-center bg-zinc-800 rounded-full p-2"
                from={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    opacity: { type: 'timing', duration: 500 },
                    scale: { type: 'timing', duration: 500 },
                }}
            >
                <StyledIonicIcons name="filter" size={24} className="text-zinc-50" />
                <StyledText className="text-xl font-bold text-zinc-50">
                    Filter
                </StyledText>
            </StyledMotiView>
        </StyledBtnOpacity>
    )
}

export default FilterButton