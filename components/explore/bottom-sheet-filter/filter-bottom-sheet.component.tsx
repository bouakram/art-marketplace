import Filter from '../filter-components/filter.component';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { StyledBS, StyledGestureHandlerRootView, StyledView } from '@/components/rn-styled-component/WindComponents';

type FilterBottomSheetComponentType = {
    bottomSheetRef: React.RefObject<BottomSheetMethods>,
    snapPoint: string[],
    displayFilter: boolean,
    closeSheet: () => void
}

function FilterButtonSheetComponent({ bottomSheetRef, snapPoint, closeSheet, displayFilter }: FilterBottomSheetComponentType) {
    return (
        <StyledGestureHandlerRootView className={`absolute w-[110%] h-full ${displayFilter ? 'z-20' : '-z-10 opacity-0'} bottom-0 shadow-lg self-center`}>
            <StyledBS
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoint}
                onChange={text => text == 0 ? closeSheet() : null}
            >
                <StyledView className="flex-1 px-6 bg-white">
                    <Filter onPress={closeSheet} displayFilter={displayFilter} />
                </StyledView>
            </StyledBS>
        </StyledGestureHandlerRootView>
    )
}

export default FilterButtonSheetComponent