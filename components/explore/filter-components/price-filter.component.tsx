import { StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import Slider from '@react-native-community/slider'
import { MotiView } from 'moti'
import { useState } from 'react'

const PriceFilter = () => {
    const [value, setValue] = useState<number>(100)
    return (
        <StyledView className='py-4'>
            <StyledView className='flex flex-row justify-between align-middle'>
                <StyledText className='mb-4 text-lg font-bold text-zinc-800'>Price</StyledText>
                <StyledText className='mb-4 text-lg font-semibold text-zinc-800'>{Math.round(value)}$</StyledText>
            </StyledView>
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    type: 'timing',
                    duration: 500,
                    delay: 150
                }}
            >
                <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={0}
                    maximumValue={1000}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#FFFFFF"
                    tapToSeek={true}
                    value={value}
                    onValueChange={value => setValue(value)}
                />
            </MotiView>
        </StyledView>
    )
}

export default PriceFilter