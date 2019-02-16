import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import body from './body.svg';
import ImageMapper from 'react-image-mapper';

export default () => {

    return (
        <div>
            <ImageMapper className="mapper" src={body} height={600}/>
        </div>
    );
}
