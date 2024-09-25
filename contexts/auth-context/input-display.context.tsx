import { createContext, useReducer } from "react";

type InputDisplayContextType = {
    setSignInTrue: () => void;
    setSignInFalse: () => void;
    signInInputState: boolean;
}

type InputDisplayProviderType = {
    children: React.ReactNode
}

export const InputDisplayContext = createContext<InputDisplayContextType>({
    setSignInTrue: () => { },
    setSignInFalse: () => { },
    signInInputState: false
})

const INITIAL_STATE = {
    signInInputState: false
}

const INPUT_DISPLAY_ACTIONS_TYPE = {
    SET_SIGN_IN_TRUE: "SET_SIGN_IN_TRUE",
    SET_SIGN_IN_FALSE: "SET_SIGN_IN_FALSE",
}

const inputDisplayReducer = (state: typeof INITIAL_STATE, action: { type: string, payload: boolean }) => {
    const { type, payload } = action

    switch (type) {
        case INPUT_DISPLAY_ACTIONS_TYPE.SET_SIGN_IN_TRUE:
            return {
                ...state,
                signInInputState: payload
            }
        case INPUT_DISPLAY_ACTIONS_TYPE.SET_SIGN_IN_FALSE:
            return {
                ...state,
                signInInputState: payload
            }
        default:
            throw new Error(`unhandled type ${type} from inputDisplay Reducer`)
    }
}

function InputDisplayProvider({ children }: InputDisplayProviderType) {
    const [{ signInInputState }, dispatch] = useReducer(inputDisplayReducer, INITIAL_STATE)

    const setSignInTrue = () => {
        dispatch({ type: INPUT_DISPLAY_ACTIONS_TYPE.SET_SIGN_IN_TRUE, payload: true })
    }
    const setSignInFalse = () => {
        dispatch({ type: INPUT_DISPLAY_ACTIONS_TYPE.SET_SIGN_IN_FALSE, payload: false })
    }

    return (
        <InputDisplayContext.Provider value={{ signInInputState, setSignInTrue, setSignInFalse }}>{children}</InputDisplayContext.Provider>
    )
}

export default InputDisplayProvider