import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react'

export const Card = () => {
    const dispatch = useDispatch();
    const [cardNumber, setCardNumber] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [owner, setOwner] = useState('')
    const [cvv, setCvv] = useState('')

    const curr = () => {
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        return [month+1, year]
    }


    const onSubmit = (e) =>{
        e.preventDefault()
        const card = {
            'cardNumber': cardNumber, 
            'month': month,
            'year': year,
            'owner': owner,
            'cvv': cvv
        }
        dispatch({type: 'toggle', payload: card})
        setCardNumber('')
        setMonth('')
        setYear('')
        setOwner('')
        setCvv('')
        document.getElementById('other').checked = false
    }

    return (
        <div className="card">
            <form onSubmit={onSubmit}> 
            <label htmlFor="other" id="other-label">flip</label>
            <input type="checkbox" id="other" />
                <main className="front">
                    <section className="card-number">
                        <input 
                        id="card-number"
                        name="card-number"
                        type="tel" 
                        inputMode="numeric" 
                        pattern="[0-9\s]{16}" 
                        autoComplete="cc-number" 
                        maxLength="16" 
                        placeholder="0000 0000 0000 0000" 
                        required={true}
                        onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </section>
                    <section className="details">
                        <div className="valid">
                            <label htmlFor="date-picker" id="date-picker-label">valid <br />thru</label>
                            <div className="date-picker">
                                <div id="month-picker">
                                    <input 
                                    type="number" 
                                    placeholder="MM" 
                                    min={curr()[0]} 
                                    max="12" 
                                    required={true} 
                                    value={month} onChange={(e) => setMonth(e.target.value)}/> {/*лучше использовать select option*/}
                                </div>
                                <div id="dash">
                                    /
                                </div>
                                <div id="year-picker">
                                    <input 
                                    type="number" 
                                    placeholder="YYYY" 
                                    min={curr()[1]} 
                                    required={true} 
                                    value={year} onChange={(e) => setYear(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="owner">
                            <div>
                                <label htmlFor="owner" id="owner-label"><span className="content">Card holder</span></label>
                                <input 
                                type="text" 
                                name="owner" 
                                id="owner" 
                                placeholder="NAME, SURNAME" 
                                required={true} 
                                value={owner} onChange={(e) => setOwner(e.target.value)}
                                />
                            </div>
                            {cardNumber[0]==='4' && <img src="https://www.idmconsulting.it/wp-content/uploads/2017/02/visa-logo-png.png" alt="card type" />}
                            {cardNumber[0]==='5' && <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG7.png" alt="card type" />}
                        </div>
                    </section>
                </main>
                <main className="back">
                    <section id="black-line"></section>
                    <section className="CVV">
                        <input 
                        type="number" 
                        name="CVV" 
                        id="CVV" 
                        placeholder="CVV" 
                        min="001" 
                        max="999" 
                        required={true} 
                        value={cvv} onChange={(e) => setCvv(e.target.value)}
                        />
                    </section>
                    <button>Оплатить</button>
                </main>
            </form>
        </div>
    )
}

export default Card