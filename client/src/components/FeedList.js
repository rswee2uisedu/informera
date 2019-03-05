import React from 'react';
import { VariableSizeList } from 'react-window';
import FeedItem from './FeedItem';
import withFeedData from '../services/withFeedData';

const FeedList = props => {
    const { feedData } = props;
    const dataToRender = feedData.feedData;

    //Not sure best way to calculate this yet...
    const getItemHeight = index => dataToRender[index].content.length;

    const row = ({ index, style }) => {
        const item = dataToRender[index];

        return <div style={style}>
            <FeedItem key={index} feedData={item} />
        </div>
    };

    return <VariableSizeList
        height={500}
        width='100%'
        itemCount={dataToRender.length}
        itemSize={getItemHeight}
    >
        {row}
    </VariableSizeList>
}

export default withFeedData(FeedList);