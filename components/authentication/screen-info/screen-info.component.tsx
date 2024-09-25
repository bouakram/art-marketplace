import { View as RNView, Text as RNText } from "react-native"
import { styled } from "nativewind"
import { StyledMotiView } from "@/components/moti-styled-component/MotiWindComponent"

const StyledView = styled(RNView)
const StyledText = styled(RNText)

function ScreenInfo() {
    return (
        <StyledView
            className="absolute top-20 p-6"
        >
            <StyledMotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'timing',
                    duration: 1000,
                }}
            >
                <StyledText
                    className="text-white font-bold text-6xl"
                >
                    THE Art
                </StyledText>
                <StyledText
                    className="text-white text-justify
                text-lg"
                >
                    Discover a vibrant of artists and art lovers. Buy and Sell your art as well.
                </StyledText>
            </StyledMotiView>
        </StyledView>
    )
}

export default ScreenInfo