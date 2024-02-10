import { useContext, useState, createContext, FC, ReactNode } from 'react';
import { Item } from './types';

const Context = createContext(null as any)


const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    let [assets, setAssets] = useState<Item[]>([])
    return (
        <Context.Provider value={{ assets, setAssets }}>
            {children}
        </Context.Provider>
    );
}

export const useContextHook = () => useContext(Context)

export default ContextProvider