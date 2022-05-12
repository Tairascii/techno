import { configureStore } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
const initState = {
    card: []
}

const cardsReducer = (state = initState, action) =>{
    if(action.type === 'toggle'){
        const card = action.payload
        card['id'] = v4()
        return { 
            ...state,
            card: state.card.concat(card)
        }
    }
    return state
    
}
export const cardStore = configureStore(
    {
        reducer:{
            cards: cardsReducer,
        }
        
    })

