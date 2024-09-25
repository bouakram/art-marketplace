import { StyledMotiView } from "@/components/moti-styled-component/MotiWindComponent"
import { StyledText, StyledView } from "@/components/rn-styled-component/WindComponents"
import FilterButton from "../filter-button/filter-button.component"

type ExploreHeaderType = {
    openSheet: () => void
}

const ExploreHeader = ({ openSheet }: ExploreHeaderType) => {
    return (
        <StyledView className="flex flex-row justify-between align-middle mb-4">
            <StyledMotiView
                from={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    opacity: { type: 'timing', duration: 500 },
                }}
            >
                <StyledText
                    className="font-bold text-3xl"
                >
                    Explore Art
                </StyledText>
            </StyledMotiView>
            <FilterButton onPress={openSheet} />
        </StyledView>
    )
}

export default ExploreHeader