import React from 'react'
import './Table.css'
import { useSelector } from 'react-redux';
export const Table = () => {
    const store = useSelector(store => store);
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Owner</th>
                    <th>Card Number</th>
                    <th>Valid thru</th>
                    <th>CVV</th>
                </tr>
                {store.cards.card.length && store.cards.card.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.owner}</td>
                        <td>{item.cardNumber}</td>
                        <td>{item.month}/{item.year}</td>
                        <td>{item.cvv}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}

export default Table