import { View, Text, Keyboard } from 'react-native'
import React, { useContext } from 'react'
import { StyledBtnOpacity, StyledInput, StyledText, StyledView, StyledViewFeedback } from '@/components/rn-styled-component/WindComponents'
import { StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'
import SignInInputs from '../auth-inputs/sign-in-inputs.component'
import { BottomSheetContext } from '@/contexts/bottom-sheet-context/bottomSheet.context'
import SignUpInputs from '../auth-inputs/sign-up-inputs.components'
import { InputDisplayContext } from '@/contexts/auth-context/input-display.context'

const AuthForm = () => {
    const { bottomSheetState } = useContext(BottomSheetContext)
    const { signInInputState } = useContext(InputDisplayContext)
    return (
        <StyledViewFeedback onPress={() => Keyboard.dismiss()}>
            <StyledView
                className='flex-1 mt-8'
            >
                <StyledView className='flex-1'>
                    {
                        bottomSheetState && <StyledMotiView
                            from={{
                                opacity: 0,
                                translateY: 100,
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            transition={{
                                opacity: { type: 'timing', duration: 500, },
                                translateY: { type: 'timing', duration: 500, },
                            }}
                        >
                            <StyledText className='text-zinc-800 font-semibold text-3xl'>
                                Start THE Art, Start with your Account
                            </StyledText>
                        </StyledMotiView>
                    }
                    {
                        signInInputState ?
                            <SignInInputs />
                            :
                            <SignUpInputs />
                    }
                </StyledView>
            </StyledView>
        </StyledViewFeedback>
    )
}

export default AuthForm