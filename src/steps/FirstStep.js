import React from 'react';
import {Modal, Button, Row, Col, List} from 'antd';
import body from './body.svg';
import ImageMapper from 'react-image-mapper';

const MAP = {
    name: "my-map",
    areas: [
        { name: "head", shape: "poly", coords: [286.5,44.5,306,36,325.5,44.5,330,62.5,329.5,71.5,326,86.5,320,103,292,103,286.5,88,282,72,282,59]},
        { name: "body", shape: "poly", coords: [292.5,103,319.5,103,320,113,351,126.5,350,203.5,345.5,211,344,227,345.5,246,351,267,353.5,279.5,258,280,261.5,266.5,266,245,267,224,265.5,210.5,262,204.5,263,127,291.5,113]},
        { name: "arm1", shape: "poly", coords: [351.5,128.5,364,135.5,371,145,373.5,155,373.5,210,374,217,380,237.5,383.5,263,385.5,288.5,386,297,395.5,307.5,406,323,404,326.5,399.5,323,396,318.5,394.5,325,400,341.5,395.5,343.5,394.5,350.5,386,345.5,384.5,342.5,379,338,374,329.5,373,302,371,296,362.5,274,356,241,350.5,204.5]},
        { name: "arm2", shape: "poly", coords: [262.5,126.5,262,205,259,215.5,256,238.5,250,267.5,245.5,285.5,240,297.5,238,310.5,237.5,321.5,236,331.5,232.5,340,228,342,218,350.5,216.5,343.5,212.5,344,211.5,341,218,321,215.5,318,208.5,325.5,205,324.5,219.5,302.5,224.5,299.5,227,290,227,272.5,229,249,237.5,217,239,192,238,162,239,148.5,246.5,137.5]},
        { name: "legs", shape: "poly", coords: [258,280.5,353.5,280,357,316.5,355.5,344,350,370,344.5,390,344.5,401,343.5,414.5,344.5,426.5,347.5,440.5,347.5,455.5,346,470,343,487.5,340,500.5,336.5,517,336,527,336,535,341,541.5,350,554,350,558.5,347,564.5,344,565,340,567,336,565.5,334,568.5,329.5,568.5,323,558.5,319,548,321,529.5,318,523,321,510.5,318,482,315.5,453,317.5,434.5,316,417.5,312.5,389.5,312,360.5,309.5,341,306.5,330.5,302,341,300.5,360.5,299,389.5,297,418,294.5,434.5,297,453,294.5,482,291,510,294.5,520.5,294,527.5,291,535,293.5,547,291,552.5,285.5,565,281.5,570,276,567.5,270,567,266.5,564.5,262,558.5,263,551,276,536,276.5,526,270,490,266.5,477.5,264.5,450.5,265.5,434.5,268.5,418.5,268,396.5,264.5,380.5,258.5,354.5,255,329,255.5,307.5]}
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
