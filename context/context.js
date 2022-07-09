import React, {useReducer, createContext} from 'react'
import contextReducer from './contextReducer'
const initialState = [];

const TrackerContext = createContext(initialState)

const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    const deleteTransaction = (id) => ( dispatch ({
        type :'DELETE_TRANSACTION', payload : id
    }))


    const addTransaction = (transaction) => ( dispatch ({
        type :'ADD_TRANSACTION', payload : transaction
    }))
    return(
        <TrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </TrackerContext.Provider>
    )
}

export {TrackerContext, Provider}



