import FilterButtonSheetComponent from '@/components/explore/bottom-sheet-filter/filter-bottom-sheet.component'
import CollectionsList from '@/components/explore/collections-list/collections-list.component'
import ExploreHeader from '@/components/explore/explore-header/explore-header.component'
import MenuButton from '@/components/explore/menu-button/menu-button.component'
import { StyledText, StyledView } from '@/components/rn-styled-component/WindComponents'
import BottomSheet from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'

const Explore = () => {
    const [displayList, setDisplayList] = useState(false)
    const [displayFilter, setDisplayFilter] = useState(false)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoint = useMemo(() => ['1%', '60%'], [])
    useEffect(() => {
        setTimeout(() => {
            setDisplayList(true)
        }, 300);
    }, [])
    const openSheet = useCallback(() => {
        bottomSheetRef.current?.snapToIndex(1)
        setDisplayFilter(true)
    }, [snapPoint])
    const closeSheet = useCallback(() => {
        bottomSheetRef.current?.collapse()
        setDisplayFilter(false)
    }, [snapPoint])
    return (
        <StyledView className='flex-1 p-4'>
            <SafeAreaView />
            <ExploreHeader openSheet={openSheet} />
            {displayList && <CollectionsList />}
            <FilterButtonSheetComponent bottomSheetRef={bottomSheetRef} snapPoint={snapPoint} closeSheet={closeSheet} displayFilter={displayFilter} />
            <MenuButton />
        </StyledView>
    )
}

export default Explore