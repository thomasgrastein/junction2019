import React from 'react';
import {Modal, Button, Row, Col, List} from 'antd';
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
    };

    toggleModal = () => {
        const { visible } = this.state;
        this.setState({visible: !visible});
    }

    getResultsFromZones = (locationId) => {
        const { working } = this.state;
        if(!working) {
            this.setState( {working: true});
            fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/'+locationId+'?language=en-gb', {
                headers: {
                    "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
                }
            }).then(res => res.json()).then(r => {
                this.setState({ zones: r }, () => {
                    console.log(r);
                    this.setState({working: false});
                })
            })
        }
    }


    mouseMove = (evt) => {
        console.log(evt);
    }

    render() {
        const { zones} = this.state;
        //var zones;
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
                <Button type="primary" onClick={() => {
                    this.toggleModal();
                    this.getResultsFromZones(15);
                }}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.toggleModal}
                    onCancel={this.toggleModal}
                >
                    {zones ? zones.map((e, k) =>
                        <List.Item key={k}>{e.Name}</List.Item>
                    ) : null}
                </Modal>
            </div>
        );
    }
}
