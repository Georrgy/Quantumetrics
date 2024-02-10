import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { useContextHook } from './Context';
import { Item } from './types';

const Portfolio = () => {
    let { assets }: { assets: Item[] } = useContextHook()
    console.log(assets);
    return (
        <Table striped bordered hover style={{ paddingLeft: 75 }}>

            <thead>
                <tr>
                    <th>#</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Value</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {assets.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.value}</td>
                        <td>{item.amount}</td>
                        <td>{item.total}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Portfolio;
