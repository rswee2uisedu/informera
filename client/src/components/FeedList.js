/** 
 * Feed list displays feed items in a scrolling list
 * (Requirements 3.a, 8)                         
 */

import React from 'react';
import { VariableSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import FeedItem from './FeedItem';
import { FeedStatus } from '../services/constants';
import withFeedData from '../services/withFeedData';
 
const FeedList = props => {
    const { feedData } = props;
    const dataToRender = feedData.feedData;

    const getItemHeight = index => {
        const item = dataToRender[index];
        let height = 125; //Base height to give room to title

        if (item.contentSnippet.length) {
            height += 175; //Room for text
        }

        if (item.enclosure) {
            height += 300; //Room for image
        }

        return height;
    }

    const row = ({ index, style }) => {
        const item = dataToRender[index];

        return <div style={style}>
            <FeedItem key={index} feedData={item} />
        </div>
    };

    //Only render list once loading is complete to ensure heights are calculated correctly
    if (feedData.feedLoadingStatus.status !== FeedStatus.Complete) {
        return null;
    }

    return <AutoSizer>
        {({ height, width }) =>
            <VariableSizeList
                style={{ overflowX: 'hidden' }}
                height={height}
                width={width}
                itemCount={dataToRender.length}
                itemSize={getItemHeight}
            >
                {row}
            </VariableSizeList >
        }
    </AutoSizer>
}

export default withFeedData(FeedList);