import React from 'react';
import { Slider, Row, Col } from 'antd'; 

export default () => {
    return (
        <div>
            <Row type="flex" align="middle">
                <Col span={8}>
                    <Slider></Slider>
                </Col>
            </Row>
        </div>
    );
}