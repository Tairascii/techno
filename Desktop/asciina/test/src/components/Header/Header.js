import React from 'react'
import './Header.css'
import Card from '../Card/Card.js'
import Table from '../Table/Table.js'
import { BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom';


export const Header = () => {
    return (
        <div className="header">
            <Router>
                <nav>
                    <Link to="/" className="link">
                        New card
                    </Link>
                    <Link to="/cards" className="link">
                        Table of cards
                    </Link>
                </nav>
                <Routes>
                    <Route path="/" element={
                        <Card />
                    } />
                    <Route path="/cards" element={
                        <Table />
                    } />
                </Routes>
            </Router>
        </div>
    )
}

export default Header