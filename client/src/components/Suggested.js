import React from 'react';
import SuggestedFeed from './SuggestedFeed';

const Suggested = () => {

    return <div className="componentContainer panel">
        <h2>Suggested</h2>
        <SuggestedFeed />
        <SuggestedFeed />
        <SuggestedFeed />
        <SuggestedFeed />
        <input className='feedSearch' type='search' placeholder='Find new feeds!' />
    </div>

}

export default Suggested;