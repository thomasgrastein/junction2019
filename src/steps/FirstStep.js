import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import body from './body.svg';

export default () => {

    function onChange(c) {
        console.log('checked = ', c);
    }

    return (
        <div>
        <h1>Hi from first step</h1>
            <image>source={require(body)}</image>
            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                <Row>
                    <Col span={8}><Checkbox value="A">A</Checkbox></Col><br></br>
                    <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                    <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                    <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                    <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                </Row>
            </Checkbox.Group>
        </div>
    );
}
