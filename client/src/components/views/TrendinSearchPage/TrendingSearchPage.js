import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SearchPage from './SearchPage'
import './TrendingSearchPage.css'

function TrendingSearchPage() {
    return (
        <div className="TrendingSearchPage">
            <Sidebar />
            <SearchPage />
        </div>
    )
}

export default TrendingSearchPage
