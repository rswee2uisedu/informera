import React from 'react';
import Card from 'react-bootstrap/Card';
import { FixedSizeList } from 'react-window';
import windowDimensions from 'react-window-dimensions';
import FeedItem from './FeedItem';
import withFeedData from '../services/withFeedData';

const FeedList = props => {
    const { feedData, height } = props;
    const dataToRender = feedData.feedData;

    //Not sure best way to calculate this yet...
    //const getItemHeight = index => dataToRender[index].content.length;

    const row = ({ index, style }) => {
        const item = dataToRender[index];

        return <div style={style}>
            <FeedItem key={index} feedData={item} />
        </div>
    };

    return <Card>
        <Card.Body>
            <FixedSizeList
                style={{ overflowX: 'hidden' }}
                height={height}
                width='100%'
                itemCount={dataToRender.length}
                itemSize={250}
            >
                {row}
            </FixedSizeList>
        </Card.Body>
    </Card>
}

export default withFeedData(windowDimensions()(FeedList));