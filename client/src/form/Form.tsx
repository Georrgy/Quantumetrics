import React, { Dispatch, SetStateAction, useState } from 'react';
import './Form.css';
import { useEffect } from 'react';
import Input from './Input';
import { useParams, useNavigate } from 'react-router-dom';
import Close from './Close';
import CoinList from '../CoinList';
import { Item, DataResponse } from '../types';
import { useContextHook } from '../Context';




export const Form = () => {
    let [coinId, setCoinId] = useState('');
    let [selectedCoinId, setSelectedCoinId] = useState('')
    let [search, setSearch] = useState('');
    let currencyId = 'USD';
    let [price, setPrice] = useState(0);
    let [customPrice, setCustomPrice] = useState(false)
    let [amount, setAmount] = useState(0);
    let [total, setTotal] = useState(0);
    let navigate = useNavigate()
    let { assets, setAssets } = useContextHook();

    let [data, setData] = useState<DataResponse>({} as DataResponse);



    useEffect(() => {
        setTotal(price * amount);
    }, [price, amount]);

    function handleSelectAsset() {
        setCoinId(selectedCoinId);
        fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoinId}&vs_currencies=${currencyId}`,
        )
            .then((response) => response.json())
            .then((data: DataResponse) => {
                setData(data);
                setPrice(data[selectedCoinId][currencyId.toLowerCase()]);
                setCustomPrice(false);
            });
    }

    function addhandler() {
        let ithem: Item = {
            from: coinId,
            to: currencyId,
            value: price,
            amount: amount,
            total: total
        };
        console.log(ithem);
        setAssets([...assets, ithem]); // spread operator
        navigate('/main/portfolio');
    }

    return (
        <div className='BUY'>
            <div className='BUY-wrapper'>
                <div className='div'>
                    <header className='header'>
                        <div className='add-note'>
                            {coinId ? (
                                <div className='frame-6'>
                                    <img
                                        className='bitcoin'
                                        alt='Bitcoin'
                                        src='bitcoin-1.svg'
                                    />
                                    <div className='frame-7'>
                                        <div className='text-wrapper-5'>
                                            {coinId?.toUpperCase()}
                                        </div>
                                        <div className='text-wrapper-6'>Bitcoin</div>
                                    </div>
                                </div>
                            ) : (
                                <div className='text-wrapper-5'>Add Asset</div>
                            )}
                            <Close />
                        </div>
                    </header>

                    {coinId ? (
                        <>
                            <div className='note'>
                                <Input
                                    label='Amount'
                                    value={amount}
                                    onChange={setAmount}
                                    unit={coinId?.toUpperCase() as string}
                                />

                                <Input
                                    label='Price'
                                    value={price}
                                    onChange={(e: number) => {
                                        setPrice(e)
                                        setCustomPrice(true)
                                    }}
                                    unit={currencyId?.toUpperCase() as string}
                                />
                            </div>
                            <div className='note'>
                                <div className='div-wrapper'>
                                    <div className={customPrice ? 'text-wrapper-4' : 'text-wrapper-2'} onClick={() => {
                                        setPrice(
                                            data[selectedCoinId][
                                            currencyId.toLowerCase()
                                            ],
                                        );
                                        setCustomPrice(false)
                                    }}>Market Price</div>

                                    <div className={customPrice ? 'text-wrapper-2' : 'text-wrapper-4'} onClick={
                                        () => {
                                            setCustomPrice(true)
                                            setPrice(0)
                                        }
                                    }>Custom Price</div>
                                </div>
                                <Input
                                    label='Total'
                                    value={Math.round(total * 100) / 100}
                                    unit={currencyId?.toUpperCase() as string}
                                    onChange={setTotal}
                                />
                            </div>
                            <div className='buttons' onClick={addhandler}>Add Transaction</div>
                        </>
                    ) : (
                        <>
                            <div className='note'>
                                <Input
                                    label=''
                                    value={search}
                                    type='text'
                                    onChange={setSearch}
                                    unit={'Search for Asset...'}
                                />
                                <CoinList
                                    setter={(id) => {
                                        setSelectedCoinId(id);
                                        setSearch(id);
                                    }}
                                    filter={search}
                                />
                            </div>
                            {selectedCoinId && (
                                <div className='buttons' onClick={handleSelectAsset}>
                                    Add Asset
                                </div>
                            )}


                            <div
                                className='buttons cancel'
                                onClick={() => navigate('/dashboard')}
                            >
                                Cancel
                            </div>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};