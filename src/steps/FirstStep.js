import React from 'react';
import {Modal, Row, Col, Spin, Select} from 'antd';
import body from './body.svg';
import ImageMapper from 'react-image-mapper';

const Option = Select.Option;

const MAP = {
    name: "bodyzones",
    areas: [
        { id: 6, name: "Head", shape: "poly", coords: [291.5, 113, 292, 103, 289, 95, 286.5, 90.5, 287.5, 87, 284, 86, 279.5, 71, 282, 70.5, 282, 62, 283, 56, 284.5, 51, 288, 44.5, 293, 41.5, 303.5, 37, 308, 37, 314.5, 40, 319.5, 41.5, 323, 44, 325.5, 47.5, 327.5, 52.5, 329, 59, 329.5, 64, 329, 72, 332, 71, 332.5, 74, 327.5, 86.5, 325, 89, 324, 93, 322.5, 97, 320.5, 100, 320.5, 104, 320, 113, 306.5, 121.5]},
        { id: 15, name: "Upper torso", shape: "poly", coords: [267.5, 220, 344.5, 220.5, 345, 216.5, 346, 212, 347, 208.5, 349, 205, 347.5, 194.5, 347.5, 185, 346, 176, 344.5, 167.5, 343.5, 158, 341, 150, 337, 140.5, 320.5, 113, 306.5, 121.5, 291, 113, 281, 140.5, 275, 160.5, 262.5, 204, 265.5, 208.5, 267, 213.5]},
        { id: 16, name: "Lower torso", shape: "poly", coords: [255, 336.5, 302.5, 337.5, 305, 334, 306, 330, 307.5, 333, 308.5, 337, 356.5, 337.5, 357, 326, 356.5, 315.5, 356, 307.5, 355, 290.5, 353.5, 275.5, 350, 263, 346.5, 247, 345.5, 240, 345.5, 234.5, 345, 229.5, 344.5, 220.5, 267, 220, 267, 232, 266.5, 241.5, 265, 252, 262.5, 261.5, 258, 280, 255.5, 308.5]},
        { id: 10, name: "Left leg", shape: "poly", coords: [255.5, 337, 303.5, 337.5, 301.5, 347, 300, 364.5, 299, 391.5, 297.5, 412.5, 296, 422.5, 294.5, 431, 294.5, 440.5, 295, 448, 296.5, 455, 295, 469.5, 294, 479.5, 294, 486.5, 292.5, 497.5, 292, 504, 291.5, 507, 291.5, 512, 292.5, 515.5, 294, 519, 294.5, 522.5, 294, 527.5, 292.5, 531, 290.5, 535, 291.5, 537.5, 292.5, 543, 293, 547.5, 291.5, 550, 290.5, 554.5, 286.5, 562.5, 281.5, 570, 277.5, 569.5, 276, 566.5, 273, 567, 269.5, 566.5, 267, 564.5, 263, 562.5, 261.5, 558.5, 262, 553.5, 264.5, 549.5, 267.5, 546, 271, 542, 276, 534.5, 276, 527, 273, 508, 271.5, 496.5, 267, 480, 264.5, 461, 264.5, 439, 267, 424.5, 267.5, 415.5, 267.5, 400, 266.5, 391, 264, 379, 263.5, 373, 257, 351.5]},
        { id: 10, name: "Right leg", shape: "poly", coords: [309, 337.5, 356, 338, 354.5, 349.5, 353, 357, 349.5, 369.5, 346.5, 384.5, 344.5, 398.5, 344, 411, 344.5, 418.5, 344.5, 425, 345.5, 430.5, 347.5, 447.5, 347.5, 440, 347, 458.5, 346.5, 466, 345.5, 474.5, 343, 484, 341.5, 493.5, 339, 503, 337, 514.5, 335.5, 526.5, 335.5, 532, 336.5, 537, 338.5, 540, 341, 543, 344, 546, 346.5, 549, 349.5, 553, 350, 559, 350.5, 555.5, 347.5, 563, 345, 565, 342.5, 566.5, 338, 567, 335, 567.5, 332, 570, 328.5, 567.5, 326.5, 564.5, 324, 561.5, 322.5, 556.5, 320.5, 552.5, 319, 548.5, 318.5, 544, 320, 539.5, 320.5, 533.5, 320.5, 530, 318.5, 526.5, 318.5, 521.5, 319, 517.5, 320, 512, 320, 506, 318.5, 490, 317, 480, 316.5, 466, 315.5, 453, 317, 445, 317, 434, 316.5, 425.5, 314.5, 415, 314, 408.5, 313.5, 395.5, 312, 376, 311.5, 361]},
        { id: 7, name: "Right arm", shape: "poly", coords: [349.5, 204.5, 343.5, 158, 336.5, 139, 322.5, 113.5, 329.5, 116.5, 338, 121, 353.5, 129, 360.5, 133, 368, 140, 371.5, 146.5, 373.5, 152, 373.5, 168.5, 373.5, 176, 373, 193, 373, 203.5, 373.5, 211.5, 374.5, 217.5, 378, 229, 382, 250, 383.5, 258.5, 385, 276.5, 385, 288, 386, 296, 386.5, 299.5, 389.5, 301.5, 393.5, 304, 396, 307, 399, 312, 402.5, 317, 404.5, 321, 406.5, 325, 403, 325, 400, 321.5, 397.5, 318.5, 395, 320, 395, 324, 396, 327, 398, 331.5, 399, 336, 400, 340, 400, 343, 397, 343, 394.5, 345, 395.5, 348, 392, 349.5, 389, 345.5, 386, 344.5, 383.5, 341.5, 380, 340, 377.5, 336, 375.5, 328, 373.5, 314, 373, 303.5, 371.5, 296.5, 367.5, 287.5, 363.5, 277, 358, 248.5, 355.5, 238, 353.5, 218, 352, 210.5, 351.5, 206] },
        { id: 7, name: "Left arm", shape: "poly", coords: [290, 113.5, 259.5, 127.5, 250.5, 133.5, 244, 140.5, 239, 150, 238, 158.5, 238.5, 166.5, 239, 196, 239, 206.5, 237, 219.5, 233.5, 230, 230.5, 244.5, 228.5, 261.5, 227.5, 268.5, 227.5, 279.5, 226.5, 294, 225.5, 299, 223, 301.5, 218.5, 305.5, 215, 308.5, 212.5, 312.5, 209, 318.5, 206, 322.5, 206, 326, 210, 325, 212.5, 321.5, 215, 318, 217.5, 320, 216.5, 325, 214, 332, 211, 341.5, 213, 344, 215.5, 342, 217, 344.5, 216.5, 349.5, 219, 350, 222.5, 347, 226.5, 345, 231.5, 341, 236, 332, 238, 316.5, 239, 304, 240.5, 297, 244, 288.5, 247, 280.5, 250, 269.5, 254.5, 248.5, 257.5, 224.5, 259, 213, 261.5, 204.5, 263.5, 199, 289, 117.5] },
    ]
};
export default class FirstStep extends React.Component {
    constructor() {
        super();
        this.state = {
            area: {},
            loading: true,
            selected: null,
        }
    }

    clicked = (area) => {
        console.log(area.id);
        this.setState({selected: area});
        this.openModal(area.id);
    };

    openModal = (id) => {
        this.getSubCategoriesFromlocation(id);
        this.setState({visible: true});
        this.setState({loading: true});
    };

    closeModal = () => {
        this.setState({visible: false});
    };

    renderCategory = () => {
        const {zones} = this.state;
        return (
            <Select defaultValue={"placeholder"} required style={{width: 200}}>
                <Option value={"placeholder"} disabled>Select bodypart</Option>
                {zones.map((v,k) => {
                    return <Option key={k} value={v.ID}>{v.Name}</Option>
                })}
            </Select>
        )
    };

    getSubCategoriesFromlocation = (locationId) => {
        const { working } = this.state;
        if(!working) {
            this.setState( {working: true});
            fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/'+locationId+'?language=en-gb', {
                headers: {
                    "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
                }
            }).then(res => res.json()).then(r => {
                this.setState({ zones: r, loading: false }, () => {
                    console.log(r);
                    this.setState({working: false});
                })
            })
        }
    }

    getSubSymptomsFromSubCategory = (subCategoryId) => {
        const { working } = this.state;
        if(!working) {
            this.setState( {working: true});
            fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/'+subCategoryId+'/man?language=en-gb', {
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



    render() {
        const {zones, loading, selected, visible} = this.state;
        //var zones;
        return (
            <div className="firststep-wrapper">
                <Row type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <h1>Please point out the body parts where you feel pain or discomfort</h1>
                        <ImageMapper
                            className="mapper"
                            src={body}
                            map={MAP}
                            height={600}
                            onMouseMove={(area, _, evt) => {}}
                            onClick={area => this.clicked(area)}
                        />
                    </Col>
                </Row>
                <Modal
                    title={selected ? selected.name : "Title"}
                    visible={visible}
                    onOk={this.closeModal}
                    onCancel={this.closeModal}
                >
                    {loading ? <Spin size="large" style={{textAlign: 'center'}} />
                    :
                        zones ? this.renderCategory()
                        : null}
                </Modal>
            </div>
        );
    }
}
