import { createContext, useEffect, useState } from 'react'

const defaultValue = {
    shopping: [], 
    lastStep: false, 
    customer: {}
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({ children }) => {
    const [shopping, setShopping] = useState([]);
    const [lastStep, setLastStep] = useState(false);
    const [customer, setCustomer] = useState({
        run: '',
        document: '',
        email: ''
    });

    

    useEffect(() => {
        if(!lastStep) {
            setCustomer({
                run: '',
                document: '',
                email: ''
            })
            setShopping([])
        }

    }, [lastStep])

    return (
        <AppContext.Provider
            value={{
                shopping, 
                lastStep, 
                customer, 
                setShopping,
                setLastStep,
                setCustomer
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider
