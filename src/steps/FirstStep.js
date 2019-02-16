import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import body from './body.svg';
import ImageMapper from 'react-image-mapper';

export default () => {

    return (
        <div>
            <Row type="flex" justify="center" align="middle">
                <Col span={16}>
                    <ImageMapper className="mapper" src={body} height={600}/>
                </Col>
            </Row>
        </div>
    );
}
