import React from 'react';
import SuggestedFeed from './SuggestedFeed';

const SuggestedFeeds = () => {

    return <div className="componentContainer">
        <h2>Suggested Feeds</h2>
        <SuggestedFeed />
        <SuggestedFeed />
        <SuggestedFeed />
        <SuggestedFeed />
        <input className='feedSearch' type='search' placeholder='Find new feeds!' />
    </div>

}

export default SuggestedFeeds;