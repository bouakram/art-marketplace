import { StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import { Colors } from '@/constants/DummyData'
import { MotiView } from 'moti'
import { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

const ColorFilter = () => {
    const [selected, setSelected] = useState<number>(0)
    const handleSelectColor = (index: number) => {
        setSelected(index)
    }
    return (
        <StyledView className='py-4'>
            <StyledText className='mb-4 text-lg font-bold text-zinc-800'>Color</StyledText>

            <StyledView className='flex flex-row flex-wrap align-middle gap-4'>
                {
                    Colors.map((color, i) => {
                        return (
                            <MotiView
                                key={i}
                                from={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: 'timing',
                                    duration: 350,
                                    delay: 150 * i
                                }}
                                style={[selected == i && styles.colorSelected]}
                            >
                                <TouchableWithoutFeedback onPress={() => handleSelectColor(i)}>
                                    <View
                                        style={[{ backgroundColor: color }, styles.colorStyle,]}
                                    >
                                    </View>
                                </TouchableWithoutFeedback>
                            </MotiView>
                        )
                    }
                    )
                }
            </StyledView>
        </StyledView >
    )
}

export default ColorFilter

const styles = StyleSheet.create({
    colorSelected: {
        borderWidth: 4,
        borderColor: "#181C14",
        borderRadius: 20,
        padding: 2,
    },
    colorStyle: {
        width: 30,
        height: 30,
        borderRadius: 17,
    },
})