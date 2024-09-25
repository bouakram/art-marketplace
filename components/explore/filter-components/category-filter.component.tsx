import { StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import { Category } from '@/constants/DummyData'
import { MotiView } from 'moti'
import { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

const CategoryFilter = () => {
    const [selected, setSelected] = useState<number>(0)
    const handleSelectColor = (index: number) => {
        setSelected(index)
    }
    return (
        <StyledView className='py-4'>
            <StyledText className='mb-4 text-lg font-bold text-zinc-800'>Category</StyledText>

            <StyledView className='flex flex-row align-middle flex-wrap gap-4'>
                {
                    Category.map((ctg, i) => {
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
                            >
                                <TouchableWithoutFeedback
                                    onPress={() => handleSelectColor(i)}
                                >
                                    <Text
                                        style={[styles.categoryStyle, selected == i && styles.selectedCategory]}

                                    >
                                        {ctg}
                                    </Text>
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

export default CategoryFilter

const styles = StyleSheet.create({
    categoryStyle: {
        padding: 6,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: "semibold",
        fontSize: 16
    },
    selectedCategory: {
        backgroundColor: "#181C14",
        color: "#ffffff",
    }
})