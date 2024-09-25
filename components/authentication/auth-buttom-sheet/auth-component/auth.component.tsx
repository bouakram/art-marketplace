import { StyledMotiView } from '@/components/moti-styled-component/MotiWindComponent'
import { StyledBtnOpacity, StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import AuthForm from './auth-form.component'
import { useContext } from 'react'
import { BottomSheetContext } from '@/contexts/bottom-sheet-context/bottomSheet.context'
import InputDisplayProvider, { InputDisplayContext } from '@/contexts/auth-context/input-display.context'
import BottomSheetComponent from '../bottom-sheet/bottom-sheet.component'

type AuthPropsType = {
    openSheet: () => void,
    closeSheet: () => void,
}

function Auth({ openSheet, closeSheet }: AuthPropsType) {
    const { bottomSheetState } = useContext(BottomSheetContext)
    const { setSignInFalse } = useContext(InputDisplayContext)
    const handleCloseSheet = () => {
        closeSheet()
        setSignInFalse()
    }
    const handleOpenSheet = () => {
        openSheet()
    }
    return (
        <StyledView className='flex-1'>
            {
                bottomSheetState ?
                    <StyledMotiView
                        from={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                        transition={{
                            scale: {
                                type: 'timing',
                                duration: 500,
                            },
                        }}
                    >
                        <StyledBtnOpacity
                            className='self-center p-2 rounded-full bg-zinc-800'
                            onPress={handleCloseSheet}
                        >
                            <StyledText className='font-bold text-lg text-zinc-50'>CLOSE</StyledText>
                        </StyledBtnOpacity>
                    </StyledMotiView>
                    :
                    <StyledMotiView
                        from={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                        transition={{
                            scale: {
                                type: 'timing',
                                duration: 500,
                            },
                        }}
                        className='self-center p-2 rounded-full bg-zinc-800'
                    >
                        <StyledBtnOpacity
                            onPress={handleOpenSheet}
                        >
                            <StyledText className='font-bold text-lg text-zinc-50'>START</StyledText>
                        </StyledBtnOpacity>
                    </StyledMotiView>
            }
            <InputDisplayProvider>
                <AuthForm />
            </InputDisplayProvider>
        </StyledView>
    )
}

export default Auth