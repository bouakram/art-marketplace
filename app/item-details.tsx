import { useLocalSearchParams, useRouter } from 'expo-router'
import { dummyDataType } from '@/constants/DummyData'
import { StyledBtnOpacity, StyledImage, StyledIonicIcons, StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import { SafeAreaView } from 'react-native'
import { StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'

const ItemDetails = () => {
    const { item } = useLocalSearchParams()
    const router = useRouter()
    if (item == undefined || typeof item != "string") {
        return
    }

    const data: dummyDataType = JSON.parse(item)

    return (
        <StyledView className='flex-1'>
            <SafeAreaView />
            <StyledImage source={data.imageSrc} className='absolute w-full h-full' />
            <StyledView className='absolute bg-zinc-800/40 w-full h-full' />
            <StyledView className='p-6'>

                <StyledView className='flex flex-row justify-between align-middle'>
                    <StyledMotiView
                        from={{
                            opacity: 0,
                            translateX: -100
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 300, delay: 300 },
                            translateX: { type: 'timing', duration: 300, delay: 300 },
                        }}
                    >
                        <StyledBtnOpacity
                            className='w-20 h-28 bg-zinc-100 rounded-full justify-center'
                            onPress={() => router.back()}
                        >
                            <StyledIonicIcons name='arrow-back' size={34} className='text-zinc-800 self-center' />
                        </StyledBtnOpacity>
                    </StyledMotiView>
                    <StyledMotiView
                        className='flex flex-col gap-2'
                        from={{
                            opacity: 0,
                            translateX: 100
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 300, delay: 300 },
                            translateX: { type: 'timing', duration: 300, delay: 300 },
                        }}
                    >
                        <StyledImage source={data.ownerImg} className='w-20 h-28 rounded-full' />
                        <StyledText className='font-bold text-zinc-50 text-center'>{data.owner}</StyledText>
                    </StyledMotiView>
                </StyledView>

                <StyledMotiView
                    className='flex flex-col self-end mt-6'
                    from={{
                        opacity: 0,
                        translateY: 100
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0
                    }}
                    transition={{
                        opacity: { type: 'timing', duration: 300, delay: 500 },
                        translateY: { type: 'timing', duration: 300, delay: 500 },
                    }}
                >
                    <StyledText className='font-bold text-4xl text-zinc-50' >{data.name}</StyledText>
                </StyledMotiView>

                <StyledView className='flex flex-col self-end gap-8 mt-2'>
                    <StyledMotiView
                        className='bg-zinc-50/30 rounded-full w-20 h-32 flex-col justify-center items-center'
                        from={{
                            opacity: 0,
                            translateY: 100
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 300, delay: 800 },
                            translateY: { type: 'timing', duration: 300, delay: 800 },
                        }}
                    >
                        <StyledText className='text-3xl font-bold text-zinc-50'>
                            {data.quantity}
                        </StyledText>
                        <StyledText className='font-bold text-zinc-50'>
                            Quantity
                        </StyledText>
                    </StyledMotiView>
                    <StyledMotiView
                        className='bg-zinc-50/30 rounded-full w-20 h-32 flex-col justify-center items-center'
                        from={{
                            opacity: 0,
                            translateY: 100
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 300, delay: 1000 },
                            translateY: { type: 'timing', duration: 300, delay: 1000 },
                        }}
                    >
                        <StyledText className='text-3xl font-bold text-zinc-50'>
                            {data.rest}
                        </StyledText>
                        <StyledText className='font-bold text-zinc-50'>
                            Rest
                        </StyledText>
                    </StyledMotiView>
                    <StyledMotiView
                        className='bg-zinc-50/30 rounded-full w-20 h-32 flex-col justify-center items-center'
                        from={{
                            opacity: 0,
                            translateY: 100
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 300, delay: 1200 },
                            translateY: { type: 'timing', duration: 300, delay: 1200 },
                        }}
                    >
                        <StyledText className='text-3xl font-bold text-zinc-50'>
                            {data.price}
                        </StyledText>
                        <StyledText className='font-bold text-zinc-50'>
                            Price $
                        </StyledText>
                    </StyledMotiView>
                </StyledView>
                <StyledMotiView
                    from={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        opacity: { type: 'timing', duration: 300, delay: 1400 },
                        scale: { type: 'timing', duration: 300, delay: 1400 },
                    }}
                >
                    <StyledBtnOpacity className='absolute -bottom-20 bg-zinc-800 w-full self-center p-4 rounded-full border-2 border-spacing-2 border-zinc-50'>
                        <StyledView className='flex flex-row justify-center items-center gap-4'>
                            <StyledIonicIcons name='cart' size={34} className='text-zinc-50 self-center' />
                            <StyledText className='font-bold text-zinc-50'>Add To Cart</StyledText>
                        </StyledView>
                    </StyledBtnOpacity>
                </StyledMotiView>
            </StyledView>
        </StyledView>
    )
}

export default ItemDetails