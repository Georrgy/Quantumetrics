import { useState, useEffect, FC } from 'react';
import { SelectIthem } from './types';
import Selector from './Selector';

const CoinList: FC<{ setter: (i: string) => void; filter?: string }> = ({
    setter,
    filter,
}) => {
    let [list, setList] = useState<SelectIthem[]>([] as SelectIthem[]); //mixing types

    useEffect(() => {
        if (list.length > 0) return;
        fetch(`http://localhost:3090/coins`)
            .then((response) => response.json())
            .then((data) => {
                let list: SelectIthem[] = data.map((item: any) => {
                    //we dont know what we recive from api so we use any we can use (selectIthem)
                    return {
                        id: item.id,
                        name: item.name,
                    };
                });
                setList(list);
            });
    }, []);
    return (
        <div >
            {(filter
                ? list.filter((item) =>
                    item.name.toLowerCase().includes(filter.toLowerCase()),
                )
                : list
            ).slice(0, 5).map((el) => (
                <Row onClick={() => setter(el.id)} coin={el} />
            ))}
        </div>
    );
};

export default CoinList;



const Row: FC<{ coin: { id: string, name: string }, onClick: () => void }> = ({ coin: { id, name }, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '100%',
                height: 44,
                padding: 16,
                background: 'rgba(255, 255, 255, 0.20)',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'inline-flex',
                margin: '2px 0',
                boxSizing: 'border-box'
            }}
        >
            <div
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 16,
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: 20,
                        height: 20,

                        background: '#FFD600',
                    }}
                ></div>
                <div
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 8,
                        display: 'flex',
                    }}
                >
                    {/* <div style={{ width: 20, height: 20, position: 'relative' }}>
                        <div
                            style={{
                                width: 14.55,
                                height: 14.55,
                                left: 3.64,
                                top: 3.64,
                                position: 'absolute',
                                background: 'white',
                            }}
                        ></div>
                        <div
                            style={{
                                width: 19.31,
                                height: 19.3,
                                left: 0.38,
                                top: 0.32,
                                position: 'absolute',
                                background: '#F39321',
                            }}
                        ></div>
                    </div> */}
                    <div
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 4,
                            display: 'inline-flex',
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                fontSize: '16px',
                                fontFamily: 'IBM Plex Sans',
                                fontWeight: '600',
                                lineHeight: '17.6px',
                                wordWrap: 'break-word',
                            }}
                        >
                            {id}
                        </div>
                        <div
                            style={{
                                color: '#97FCE4',
                                fontSize: '14px',
                                fontFamily: 'IBM Plex Sans',
                                fontWeight: '400',
                                lineHeight: '15.4px',
                                wordWrap: 'break-word',
                            }}
                        >
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
