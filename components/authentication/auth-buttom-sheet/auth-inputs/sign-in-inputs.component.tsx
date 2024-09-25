import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { StyledBtnOpacity, StyledInput, StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import { StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'
import { BottomSheetContext } from '@/contexts/bottom-sheet-context/bottomSheet.context'
import { InputDisplayContext } from '@/contexts/auth-context/input-display.context'
import { Link } from 'expo-router'

const SignInInputs = () => {
    const { bottomSheetState } = useContext(BottomSheetContext)
    const { signInInputState, setSignInFalse } = useContext(InputDisplayContext)
    const handleSignInClick = () => {
        setSignInFalse()
    }
    return (
        <StyledView className='flex-1 flex-col justify-around'>
            <StyledView className="flex flex-col gap-2">
                {
                    (bottomSheetState && signInInputState) && <StyledMotiView
                        from={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 500, delay: 200 },
                            translateY: { type: 'timing', duration: 500, delay: 200 },
                        }}
                    >
                        <StyledInput
                            placeholder='Email or UserName'
                            placeholderTextColor={"#999"}
                            className="px-4 pt-6 pb-2 border-b-zinc-400 border-b-2 placeholder-zinc-400 text-lg"
                        />
                    </StyledMotiView>
                }
                {
                    (bottomSheetState && signInInputState) && <StyledMotiView
                        from={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 500, delay: 400 },
                            translateY: { type: 'timing', duration: 500, delay: 400 },
                        }}
                    >
                        <StyledInput
                            placeholder='Password'
                            placeholderTextColor={"#999"}
                            className="px-4 pt-6 pb-2 border-b-zinc-400 border-b-2 placeholder-zinc-400 text-lg"
                        />
                    </StyledMotiView>
                }
            </StyledView>
            <StyledView className='flex flex-col gap-2 self-center'>
                {
                    (bottomSheetState && signInInputState) && <StyledMotiView
                        from={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 500, delay: 600 },
                            translateY: { type: 'timing', duration: 500, delay: 600 },
                        }}
                        exitTransition={{
                            scale: { type: 'timing', duration: 500, }
                        }}
                    >
                        <Link href={'/explore'} asChild>
                            <StyledBtnOpacity className='px-4 py-2 bg-zinc-800 rounded-full shadow-md'>
                                <StyledText className='text-bold text-lg text-zinc-50 text-center'>
                                    Sing in
                                </StyledText>
                            </StyledBtnOpacity>
                        </Link>
                    </StyledMotiView>
                }
                {
                    (bottomSheetState && signInInputState) && <StyledMotiView
                        className='flex flex-row gap-2 align-middle'
                        from={{
                            opacity: 0,
                            translateY: 100,
                        }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{
                            opacity: { type: 'timing', duration: 500, delay: 600 },
                            translateY: { type: 'timing', duration: 500, delay: 600 },
                        }}
                        exitTransition={{
                            scale: { type: 'timing', duration: 500, }
                        }}
                    >
                        <StyledText className='font-bold'>
                            you dont hav an account,
                        </StyledText>
                        <StyledBtnOpacity onPress={handleSignInClick}>
                            <StyledText className='font-bold text-blue-500'>
                                create one!
                            </StyledText>
                        </StyledBtnOpacity>
                    </StyledMotiView>
                }
            </StyledView>
        </StyledView>
    )
}

export default SignInInputs