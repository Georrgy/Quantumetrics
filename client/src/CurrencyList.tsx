import { useState, useEffect, FC } from 'react';
import { SelectIthem } from './types';
import Selector from './Selector';


const CurrencyList: FC<{ setter: (i: string) => void }> = ({ setter }) => {
    let [list, setList] = useState<SelectIthem[]>([] as SelectIthem[]); //mixing types

    useEffect(() => {
        if (list.length > 0) return;
        fetch(`http://localhost:3090/currency`)
            .then((response) => response.json())
            .then((data) => {
                let list: SelectIthem[] = data.map((item: string) => {
                    return {
                        id: item,
                        name: item,
                    }
                })
                setList(list)
            });
    }, []);
    return <Selector setter={setter} list={list} label="Currency" />;
};

export default CurrencyList;