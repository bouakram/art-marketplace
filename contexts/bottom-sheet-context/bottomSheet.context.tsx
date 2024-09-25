import {
    createContext,
    // useEffect, 
    useReducer,
    // useState 
} from "react"

type BottomSheetType = { children: React.ReactNode }
type BottomSheetContextType = {
    bottomSheetState: boolean,
    setBottomSheet: () => void,
    removeBottomSheet: () => void,
}

export const BottomSheetContext = createContext<BottomSheetContextType>({
    bottomSheetState: false,
    setBottomSheet: () => { },
    removeBottomSheet: () => { },
})

const INITIAL_STATE = {
    bottomSheetState: false,
}

const BOTTOM_SHEET_ACTION_TYPES = {
    SET_BOTTOM_SHEET: "SET_BOTTOM_SHEET",
    REMOVE_BOTTOM_SHEET: "REMOVE_BOTTOM_SHEET"
}

const bottomSheetReducer = (state: typeof INITIAL_STATE, action: { type: string, payload: boolean }) => {
    const { type, payload } = action

    switch (type) {
        case BOTTOM_SHEET_ACTION_TYPES.SET_BOTTOM_SHEET:
            return {
                ...state,
                bottomSheetState: payload
            }
        case BOTTOM_SHEET_ACTION_TYPES.REMOVE_BOTTOM_SHEET:
            return {
                ...state,
                bottomSheetState: payload
            }
        default:
            throw new Error(`unhandled type ${type} from bottomSheet Reducer`)
    }
}

function BottomSheetProvider({ children }: BottomSheetType) {
    const [{ bottomSheetState }, dispatch] = useReducer(bottomSheetReducer, INITIAL_STATE)

    const setBottomSheet = () => {
        dispatch({ type: BOTTOM_SHEET_ACTION_TYPES.SET_BOTTOM_SHEET, payload: true })
    }
    const removeBottomSheet = () => {
        dispatch({ type: BOTTOM_SHEET_ACTION_TYPES.REMOVE_BOTTOM_SHEET, payload: false })
    }

    return (
        <BottomSheetContext.Provider value={{ bottomSheetState, removeBottomSheet, setBottomSheet }}>{children}</BottomSheetContext.Provider>
    )
}

export default BottomSheetProvider