import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'
import { styled } from "nativewind"
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Auth from '../auth-component/auth.component';
import { BottomSheetContext } from '@/contexts/bottom-sheet-context/bottomSheet.context';

const StyledView = styled(View)
const StyledBS = styled(BottomSheet)
const StyledGestureHandlerRootView = styled(GestureHandlerRootView)

function BottomSheetComponent() {
    const { setBottomSheet, removeBottomSheet } = useContext(BottomSheetContext)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoint = useMemo(() => ['12%', '80%'], [])
    const openSheet = useCallback(() => {
        setBottomSheet()
        bottomSheetRef.current?.snapToIndex(1)
    }, [snapPoint])
    const closeSheet = useCallback(() => {
        removeBottomSheet()
        bottomSheetRef.current?.collapse()
    }, [snapPoint])

    return (
        <StyledGestureHandlerRootView className='flex-1 shadow-lg'>
            <StyledBS
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoint}
                handleIndicatorStyle={{ display: "none" }}
                enableContentPanningGesture={false}
            >
                <StyledView className="flex-1 px-6 bg-white">
                    <Auth
                        closeSheet={closeSheet}
                        openSheet={openSheet}
                    />
                </StyledView>
            </StyledBS>
        </StyledGestureHandlerRootView>
    )
}

export default BottomSheetComponent