import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import body from './body.svg';
import ImageMapper from 'react-image-mapper';

const MAP = {
    name: "my-map",
    areas: [
        { name: "1", shape: "poly", coords: [219, 118, 220, 210, 283, 210, 284, 119], preFillColor: "pink" },
    ]
}
export default class FirstStep extends React.Component {
    constructor() {
        super();
        this.state = {
            area: {}
        }
    }

    log = () => {
        console.log("hi");
    }

    mouseMove = (evt) => {
        console.log(evt);
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <ImageMapper
                            className="mapper"
                            src={body}
                            map={MAP}
                            height={600}
                            onMouseMove={(area, _, evt) => this.log()}
                            onImageMouseMove={evt => this.mouseMove(evt)}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
