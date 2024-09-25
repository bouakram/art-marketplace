import { StyledBtnOpacity, StyledFlatList, StyledImage, StyledIonicIcons, StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import { DummyData, dummyDataType } from '@/constants/DummyData'
import { ListRenderItem } from 'react-native'
import { StyledMotiView } from '../../moti-styled-component/MotiWindComponent'
import { useRouter } from 'expo-router'

const CollectionsList = () => {
    const router = useRouter()
    const renderItems: ListRenderItem<dummyDataType> = ({ item, index }) => {
        return (
            <StyledBtnOpacity
                className={`w-[48.5%] h-[250] shadow-sm ring-1 ring-zinc-400`}
                onPress={() => router.push({
                    pathname: '/item-details',
                    params: { item: JSON.stringify(item) }
                })}
            >
                <StyledMotiView
                    className={`w-full h-full`}
                    from={{
                        opacity: 0,
                        translateY: 100,
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0,
                    }}
                    transition={{
                        opacity: { type: 'timing', duration: 500, delay: 150 * index },
                        translateY: { type: 'timing', duration: 500, delay: 150 * index },
                    }}
                >
                    <StyledImage source={item.imageSrc} className='absolute w-full h-full rounded-3xl'
                    />
                    <StyledView className='absolute bottom-0 p-2 bg-zinc-800/80 w-full rounded-t-lg
                rounded-b-3xl'>
                        <StyledText className='font-bold text-lg text-zinc-50'>{item.name}</StyledText>
                        <StyledView className='flex flex-row justify-between align-middle'>
                            <StyledText className='font-bold text-lg text-zinc-50'>{item.price}$</StyledText>
                            <StyledText className='font-bold text-lg text-zinc-50'>{item.rest} of {item.quantity}</StyledText>
                        </StyledView>
                    </StyledView>
                </StyledMotiView>
            </StyledBtnOpacity>

        )
    }
    return (
        <StyledFlatList
            className='flex-1'
            numColumns={2}
            contentContainerStyle={{ gap: 10 }}
            columnWrapperStyle={{ gap: 10 }}
            data={DummyData}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
        />
    )
}


export default CollectionsList